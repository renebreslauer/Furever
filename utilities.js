const proxyAnimal = animal => ({
    id: animal.id,
    type: animal.type,
    name: animal.name,
    breeds: animal.breeds,
    colors: animal.colors,
    age: animal.age,
    size: animal.size,
    gender: animal.gender,
    coat: animal.coat,
    description: animal.description,
    organization_id: animal.organization_id,
    status: animal.status,
    contact: animal.contact,
    published_at: animal.published_at,
    image: animal.photos
  })


  module.exports.proxyAnimal = proxyAnimal;