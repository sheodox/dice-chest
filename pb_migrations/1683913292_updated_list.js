migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("35t7scxq6nfd8zs")

  collection.name = "activity_list"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("35t7scxq6nfd8zs")

  collection.name = "list"

  return dao.saveCollection(collection)
})
