migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wuc6wdv9u1t8809")

  collection.listRule = "@request.auth.id != \"\" && user.id = @request.auth.id"
  collection.updateRule = "@request.auth.id != \"\" && user.id = @request.auth.id"
  collection.deleteRule = "@request.auth.id != \"\" && user.id = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wuc6wdv9u1t8809")

  collection.listRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
