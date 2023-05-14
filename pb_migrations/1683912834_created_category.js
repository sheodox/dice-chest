migrate((db) => {
  const collection = new Collection({
    "id": "e4gqi4juicf5l9o",
    "created": "2023-05-12 17:33:54.865Z",
    "updated": "2023-05-12 17:33:54.865Z",
    "name": "category",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "cendrakb",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 2,
          "max": 100,
          "pattern": ""
        }
      },
      {
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("e4gqi4juicf5l9o");

  return dao.deleteCollection(collection);
})
