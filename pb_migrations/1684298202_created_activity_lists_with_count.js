migrate((db) => {
  const collection = new Collection({
    "id": "w6695e38cffigw6",
    "created": "2023-05-17 04:36:42.908Z",
    "updated": "2023-05-17 04:36:42.908Z",
    "name": "activity_lists_with_count",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "bcsy93h3",
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
        "id": "1ir9pzna",
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
        "id": "be2ojfo2",
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
        "id": "plpatwe6",
        "name": "activityCount",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      }
    ],
    "indexes": [],
    "listRule": "@request.auth.id = user && @request.query.categoryId = category",
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT activity_list.id as id,  activity_list.name as name, activity_list.user as user, activity_list.category as category, count(activity.id) as activityCount\nFROM activity_list\nLEFT JOIN activity on activity.activityList = activity_list.id\nGROUP BY activity_list.id"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("w6695e38cffigw6");

  return dao.deleteCollection(collection);
})
