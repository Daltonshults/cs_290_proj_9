document.addEventListener('DOMContentLoaded', bindNavBarClickHandlers)
document.addEventListener('DOMContentLoaded', displayFeatured)

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
}

function displayFeatured(event) {
  fetch('/motorcycles/featured').then((response) => {
    if (response.ok) {
      return response.json()
    }
  }).then((motorcycles) => {
    let bigDiv = document.createElement('div')
    bigDiv.setAttribute('id', 'featured')
    let featuredHeader = document.createElement('h2')
    featuredHeader.appendChild(document.createTextNode('Featured Bike'))
    bigDiv.appendChild(featuredHeader)
    let smallDiv = document.createElement('div')
    smallDiv.setAttribute('id', 'motorcycle')
    bigDiv.appendChild(smallDiv)

    let bikeInfo = document.createElement('h3')
    let bikeInfoLink = document.createElement('a')

    bikeInfoLink.setAttribute('href', '/motorcycle_' + motorcycles.id + '.html')
    bikeInfoLink.appendChild(document.createTextNode(motorcycles.year + " " + motorcycles.manufacturer.name + " " + motorcycles.model))

    let imageLink = document.createElement('a')
    imageLink.setAttribute('href', '/motorcycle_' + motorcycles.id + '.html')
    imageLink.setAttribute('alt', motorcycles.year + " " + motorcycles.manufacturer.name + " " + motorcycles.model)

    let image = document.createElement('img')
    image.setAttribute('src', '/assets/images/motorcycle_' + motorcycles.id + '.jpg')

    imageLink.appendChild(image)

    smallDiv.appendChild(imageLink)

    bikeInfo.appendChild(bikeInfoLink)
    smallDiv.appendChild(bikeInfo)

    let manufacturer = document.createElement('h4')
    let manufacturerLink = document.createElement('a')
    manufacturerLink.setAttribute('href', '/manufacturer_' + motorcycles.manufacturer.id + '.html')
    manufacturerLink.appendChild(document.createTextNode(motorcycles.manufacturer.name))
    manufacturer.appendChild(document.createTextNode('Manufacturer: '))
    manufacturer.appendChild(manufacturerLink)

    let category = document.createElement('h4')
    let categoryLink = document.createElement('a')
    categoryLink.setAttribute('href', '/category_' + motorcycles.category.id + '.html')
    categoryLink.appendChild(document.createTextNode(motorcycles.category.name))
    category.appendChild(document.createTextNode("Category: "))
    category.appendChild(categoryLink)

    let info = document.createElement('p')
    info.appendChild(document.createTextNode(motorcycles.cc + "cc" + " " + motorcycles.hp + "hp"))

    smallDiv.appendChild(manufacturer)
    smallDiv.appendChild(category)
    smallDiv.appendChild(info)


    let main = document.querySelector('main')
    main.appendChild(bigDiv)
  })

}