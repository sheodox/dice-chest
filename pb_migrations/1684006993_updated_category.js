migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e4gqi4juicf5l9o")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "x6fe4qej",
    "name": "activityLists",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "35t7scxq6nfd8zs",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e4gqi4juicf5l9o")

  // remove
  collection.schema.removeField("x6fe4qej")

  return dao.saveCollection(collection)
})
