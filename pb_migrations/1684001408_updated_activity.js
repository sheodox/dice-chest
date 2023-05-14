migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wuc6wdv9u1t8809")

  collection.createRule = "@request.auth.id != \"\" && @request.auth.id = @request.data.user"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wuc6wdv9u1t8809")

  collection.createRule = null

  return dao.saveCollection(collection)
})
