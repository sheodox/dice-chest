migrate((db) => {
  const collection = new Collection({
    "id": "wuc6wdv9u1t8809",
    "created": "2023-05-12 17:40:44.941Z",
    "updated": "2023-05-12 17:40:44.941Z",
    "name": "activity",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
        "system": false,
        "id": "hcqwkpki",
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
        "id": "vwjynj43",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": 2,
          "max": 500,
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
  const collection = dao.findCollectionByNameOrId("wuc6wdv9u1t8809");

  return dao.deleteCollection(collection);
})
