migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e4gqi4juicf5l9o")

  collection.createRule = "@request.auth.id != \"\" && @request.auth.id = @request.data.user"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e4gqi4juicf5l9o")

  collection.createRule = null

  return dao.saveCollection(collection)
})
