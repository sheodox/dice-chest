migrate((db) => {
  const collection = new Collection({
    "id": "35t7scxq6nfd8zs",
    "created": "2023-05-12 17:35:55.538Z",
    "updated": "2023-05-12 17:35:55.538Z",
    "name": "list",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "to2kidz8",
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
      },
      {
        "system": false,
        "id": "ix4abfhw",
        "name": "category",
        "type": "relation",
        "required": true,
        "unique": false,
        "options": {
          "collectionId": "e4gqi4juicf5l9o",
          "cascadeDelete": true,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "k1pjh9wc",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 2,
          "max": 100,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("35t7scxq6nfd8zs");

  return dao.deleteCollection(collection);
})
