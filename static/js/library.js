(function ($){
  const remoteLocation = 'https://raw.githubusercontent.com/dashbird/filters/master/'
  const filtersJSON = 'filters.json'
  const localJSON = '/library/filters.json'
  let rules, services, languages

  function getService (rule) {
    return _(services).find({ id: rule.serviceId })
  }

  function getLanguage (rule) {
    return _(languages).find({ id: rule.langId })
  }

  function renderRow (rule) {
    const service = getService(rule)
    const language = getLanguage(rule).name
    return `<div class='mb-0 mb-2 rule'>
      <p class='m-0 mainline'>
        <img src='${service.logo}' class='logo' width=25>
        <span class='text-capitalize'>${rule.name}</span>
        <span class='service'>in ${service.name}</span>
        <span class='badge badge-pill badge-lang p-lang'>${language}</span>
      </p>
      <pre class='query'>${rule.pattern.replace(/\n|\r/g, '')}</pre>
      </div>`
  }

  function renderList (rulz, elementId) {
    let ruleHTML = ''
    rulz.forEach(function (r) {
      ruleHTML += renderRow(r)
    })
    $(elementId).html(ruleHTML)
  }

  function renderService (service) {
    if (service === 0) {
      return `<a href='#' class='dropdown-item' data-service=0>All services</a>`
    }
    return `<a href='#' class='dropdown-item' data-service='${service.id}'>
      <img src='${service.logo}' class='btn-icon'>
      ${service.name}
    </a>`
  }

  function renderDropdown (elementId) {
    let servicesHTML = renderService(0)
    services.forEach(function (s) {
      servicesHTML += renderService(s)
    })
    $(elementId).html(servicesHTML)
  }
  $.getJSON(`${remoteLocation}${filtersJSON}`)
    .done(data => {
      services = data.services
      languages = data.languages
      rules = data.rules
      renderDropdown('#service-dropdown')
      renderList(rules, '#lib-info')
    })

  $('.dropdown-menu').on('click', '.dropdown-item', function () {
    const serviceId = $(this).data('service')
    $('.value').html(serviceId !== 0 ? `: ` + $(this).html() : '')
    const subsetOfRules = serviceId == 0 ? rules : _(rules).filter({ serviceId })
    renderList(subsetOfRules, '#lib-info')
  })
}(jQuery))
