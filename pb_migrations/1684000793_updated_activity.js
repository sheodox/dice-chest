migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wuc6wdv9u1t8809")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tbx3sj6v",
    "name": "description",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wuc6wdv9u1t8809")

  // remove
  collection.schema.removeField("tbx3sj6v")

  return dao.saveCollection(collection)
})
