migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e4gqi4juicf5l9o")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lwpx9zgx",
    "name": "user",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("e4gqi4juicf5l9o")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lwpx9zgx",
    "name": "user",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
