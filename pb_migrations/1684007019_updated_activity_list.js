migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("35t7scxq6nfd8zs")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bnazoenu",
    "name": "activities",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "wuc6wdv9u1t8809",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("35t7scxq6nfd8zs")

  // remove
  collection.schema.removeField("bnazoenu")

  return dao.saveCollection(collection)
})
