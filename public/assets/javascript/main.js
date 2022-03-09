

document.addEventListener('DOMContentLoaded', bindNavBarClickHandlers)
document.addEventListener('DOMContentLoaded', mainContent)

function bindNavBarClickHandlers(event) {
  let categoriesLink = document.getElementById('lnk-categories')
  categoriesLink.addEventListener('click', displayCategories, false)
  let manufacturersLink = document.getElementById('lnk-manufacturers')
  manufacturersLink.addEventListener('click', displayManufacturers, false)
}

function displayCategories(event) {
  event.preventDefault()
  fetch('/categories').then((response) => {
    if (response.ok) {
      return response.json()
    }
  }).then((categories) => {
    let categoriesHeader = document.createElement('h2')
    categoriesHeader.appendChild(document.createTextNode('Categories'))
    let categoriesList = document.createElement('ul')
    categoriesList.setAttribute('id', 'categories')
    categories.forEach(category => {
      let listItem = document.createElement('li')
      let listItemHeader = document.createElement('h3')
      let listItemLink = document.createElement('a')
      listItemLink.setAttribute('href', '/category_' + category.id + '.html')
      listItemLink.appendChild(document.createTextNode(category.name))
      listItemHeader.appendChild(listItemLink)
      listItem.appendChild(listItemHeader)
      categoriesList.appendChild(listItem)
    })


    let main = document.querySelector('main')
    while (main.hasChildNodes()) {
      main.removeChild(main.lastChild);
    }
    main.appendChild(categoriesHeader)
    main.appendChild(categoriesList)
  })

}

function displayManufacturers(event) {
  event.preventDefault()
  fetch('/manufacturers').then((response) => {
    if (response.ok) {
      return response.json()
    }
  }).then((manufacturers) => {
    let manufacturersHeader = document.createElement('h2')
    manufacturersHeader.appendChild(document.createTextNode('Manufacturers'))
    let manufacturersList = document.createElement('ul')
    manufacturersList.setAttribute('id', 'manufacturers')
    manufacturers.forEach(manufacturer => {
      let listItem = document.createElement('li')
      let listItemHeader = document.createElement('h3')
      let listItemLink = document.createElement('a')
      listItemLink.setAttribute('href', '/manufacturer_' + manufacturer.id + '.html')
      listItemLink.appendChild(document.createTextNode(manufacturer.name))
      listItemHeader.appendChild(listItemLink)
      listItem.appendChild(listItemHeader)
      manufacturersList.appendChild(listItem)
    })
    let main = document.querySelector('main')
    while (main.hasChildNodes()) {
      main.removeChild(main.lastChild);
    }
    main.appendChild(manufacturersHeader)
    main.appendChild(manufacturersList)

  })

  // let manufacturersHeader = document.createElement('h2')
  // manufacturersHeader.appendChild(document.createTextNode('Manufacturers'))
  // let manufacturersList = document.createElement('ul')
  // manufacturersList.setAttribute('id', 'manufacturers')
  // manufacturers.forEach(manufacturer => {
  //   let listItem = document.createElement('li')
  //   let listItemHeader = document.createElement('h3')
  //   let listItemLink = document.createElement('a')
  //   listItemLink.setAttribute('href', '/manufacturer_' + manufacturer.id + '.html')
  //   listItemLink.appendChild(document.createTextNode(manufacturer.name))
  //   listItemHeader.appendChild(listItemLink)
  //   listItem.appendChild(listItemHeader)
  //   manufacturersList.appendChild(listItem)
  // })
  // let main = document.querySelector('main')
  // while (main.hasChildNodes()) {
  //   main.removeChild(main.lastChild);
  // }
  // main.appendChild(manufacturersHeader)
  // main.appendChild(manufacturersList)
}

function mainContent() {
  let main = document.querySelector('main')
  main.innerHTML = "<h2> Hello world </h2>"
}