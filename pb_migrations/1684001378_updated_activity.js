migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wuc6wdv9u1t8809")

  collection.listRule = "@request.auth.id = user"
  collection.viewRule = "@request.auth.id = user"
  collection.createRule = ""
  collection.updateRule = "@request.auth.id = user"
  collection.deleteRule = "@request.auth.id = user"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wuc6wdv9u1t8809")

  collection.listRule = null
  collection.viewRule = null
  collection.createRule = null
  collection.updateRule = null
  collection.deleteRule = null

  return dao.saveCollection(collection)
})
