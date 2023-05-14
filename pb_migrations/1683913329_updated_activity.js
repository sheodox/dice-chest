migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wuc6wdv9u1t8809")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "efusohnm",
    "name": "activityList",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "35t7scxq6nfd8zs",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wuc6wdv9u1t8809")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "efusohnm",
    "name": "list",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "35t7scxq6nfd8zs",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
