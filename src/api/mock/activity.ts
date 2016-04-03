import { IActivityItem, ActivityKind } from '../contracts';

let activities: IActivityItem[] = [
    {
      "id" : "fdb94aaf-e2a3-45e4-86a3-a3a3eed8bd38",
      "date" : "2015-06-01T00:00:00Z",
      "kind" : 2,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 },
      "location": {
        "lon": 144.96339797973633,
        "lat": -37.81507298760665
      }
    },
    {
      "id" : "6673bcbd-a608-40dc-9d08-2b8f1b4f28b3",
      "date" : "2016-03-05T00:00:00Z",
      "kind" : 2,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 },
      "location": {
        "lon": 144.94966506958008,
        "lat": -37.83148014503288
      }
    },
    {
      "id" : "489a6bb6-87b6-41a3-969c-9c339c809b68",
      "date" : "2016-02-28T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 },
      "location": {
        "lon": 144.9656295776367,
        "lat": -37.81344563270114
      }
    },
    {
      "id" : "78f83064-f82b-4f74-a739-99481aed1b46",
      "date" : "2015-05-04T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 },
      "location": {
        "lon": 144.9762725830078,
        "lat": -37.80286695148152
      }
    },
    {
      "id" : "7f83d98d-8591-434f-a75b-0b1ed5f9dfe6",
      "date" : "2015-12-20T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 },
      "location": {
        "lon": 145.0366973876953,
        "lat": -37.83690319650765
      }
    },
    {
      "id" : "14a52743-3ba6-4701-8057-66d0c7040bea",
      "date" : "2015-09-02T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 },
      "location": {
        "lon": 145.02090454101562,
        "lat": -37.74248523826606
      }
    },
    {
      "id" : "e4d04645-1578-4bf8-b0d0-2c7baf47c85c",
      "date" : "2015-04-24T00:00:00Z",
      "kind" : 2,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "8d6aab88-72f0-4cb5-8c8f-580d6089ef56",
      "date" : "2016-01-25T00:00:00Z",
      "kind" : 3,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "72fc98d3-ec2c-457c-9e9c-7d7c30a19dc3",
      "date" : "2016-01-16T00:00:00Z",
      "kind" : 3,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "86bec8e9-25ab-462e-aaab-c21419c96a52",
      "date" : "2015-11-20T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "476cea8a-e141-4626-abe0-088d65c028b9",
      "date" : "2015-09-20T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "336cf9c6-7ced-4893-aada-dc57e3bd52c1",
      "date" : "2015-07-03T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "9844a0d0-ec67-4013-8011-0b63b4329917",
      "date" : "2015-07-26T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "05642483-de95-4049-8887-f118805c3377",
      "date" : "2015-06-27T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "63369446-75bf-47af-93c4-e8ffd8a8e095",
      "date" : "2015-11-04T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "c38b31da-d09a-4334-9b26-5ec5dae5c328",
      "date" : "2015-09-13T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "8b4f52d2-f727-4d18-807e-79dbec468275",
      "date" : "2015-10-11T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "398e3144-6659-45f8-8e02-681135355026",
      "date" : "2015-06-17T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "f7cb6a2f-4f90-4c59-ad88-a6b7b9f3d582",
      "date" : "2016-01-31T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "aeab19b2-18e6-4eb2-a613-e5f2d21016c3",
      "date" : "2015-12-03T00:00:00Z",
      "kind" : 3,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "7ee4d7f9-da46-4fa2-91b9-5dd98ca9bfec",
      "date" : "2015-05-25T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "67891331-6c5c-4b15-87c8-b8d73e7b968e",
      "date" : "2015-12-31T00:00:00Z",
      "kind" : 3,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "e09e775d-4d48-4206-974b-d8a37fc6dab8",
      "date" : "2015-08-21T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "fc016141-7c2f-48f5-aed8-24b58701dbc4",
      "date" : "2015-10-02T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "ac9e99d7-1a92-4069-8daa-35d33b5b19d9",
      "date" : "2016-02-25T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "b4f5d3ed-0979-4990-a016-eecc670caf9a",
      "date" : "2015-08-28T00:00:00Z",
      "kind" : 2,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "36f4a0b7-706f-4191-ba42-6ad3987bd727",
      "date" : "2015-10-16T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "8f19daf0-5c4b-423c-ab3c-55454c2fcd4a",
      "date" : "2015-10-24T00:00:00Z",
      "kind" : 2,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "a4edb94b-73cb-4a9b-b251-82f0b28f62cf",
      "date" : "2015-10-03T00:00:00Z",
      "kind" : 3,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "ffc71c74-bbfe-403a-9cc0-e3f09f790009",
      "date" : "2015-08-01T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "8ee5a3e6-af80-4739-9cb5-385d7da1f4e1",
      "date" : "2015-05-08T00:00:00Z",
      "kind" : 3,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "68d0b437-1183-4fd0-9d9d-0ce35fc53940",
      "date" : "2015-06-10T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "d2148f2b-b9a8-417d-9ebf-e14c51af2327",
      "date" : "2015-07-22T00:00:00Z",
      "kind" : 3,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "0448f22d-b8af-4700-8c2c-a1ae0e0899c0",
      "date" : "2015-12-29T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "4a600e4d-25ec-401c-8cff-a99d12fac463",
      "date" : "2015-05-29T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "6859b8d8-9992-4b64-92ec-196b92a26ac2",
      "date" : "2015-07-11T00:00:00Z",
      "kind" : 3,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "962b1d2c-21d3-4c5f-a71a-29d0125644a1",
      "date" : "2015-06-08T00:00:00Z",
      "kind" : 3,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "18136df5-7cc2-4114-ad56-b3dd0fb118e3",
      "date" : "2015-04-26T00:00:00Z",
      "kind" : 2,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "0b263984-3e15-433f-af91-48496b7b6f39",
      "date" : "2015-11-12T00:00:00Z",
      "kind" : 2,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "543a7d44-0fab-45a1-9fad-5e63975a1081",
      "date" : "2016-03-25T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "5c1d9091-dce8-4154-af9b-7e1ba254b5ab",
      "date" : "2015-12-18T00:00:00Z",
      "kind" : 3,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "2d197479-b0e1-4b7e-84cc-8678a5219b1b",
      "date" : "2015-08-24T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "efcb41de-d053-469e-a4ee-5cd4d34fd980",
      "date" : "2015-11-11T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "5f4ea7a0-0c71-4a66-aff9-a8fb2534ac9b",
      "date" : "2016-01-06T00:00:00Z",
      "kind" : 3,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "8aa9b523-2f7b-4e41-9391-730ba5ae1ac2",
      "date" : "2015-07-04T00:00:00Z",
      "kind" : 3,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "6f9e7687-4e2c-45a1-a5b2-c1870dbba1aa",
      "date" : "2015-04-07T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "75bb046d-6cf3-4fd0-86ae-87af7bd5cfc8",
      "date" : "2015-08-12T00:00:00Z",
      "kind" : 2,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "21c31ff4-0ffd-4d2c-837e-8d83822afa7b",
      "date" : "2016-01-22T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "9f6377e7-cf0f-42b0-9b5e-1e4f1c9c756b",
      "date" : "2015-04-28T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "a43b26ba-da34-4927-bbbe-9dc25192fdae",
      "date" : "2015-05-23T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "ec31170e-9933-4cb2-8c7d-5bd9789e32cd",
      "date" : "2015-12-10T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "aa1b4ff8-d8db-451a-907c-41d528ed5a2d",
      "date" : "2015-10-12T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "f8b2541d-ba20-48f6-be78-3494f089ce54",
      "date" : "2015-06-20T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "f0dc300d-1c02-4add-b43b-4264b970b92b",
      "date" : "2015-08-03T00:00:00Z",
      "kind" : 2,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "c640c1fb-4d48-48a4-851b-f74495701d90",
      "date" : "2016-02-19T00:00:00Z",
      "kind" : 3,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "fd2d570f-020e-4349-bec8-743588de3db1",
      "date" : "2015-05-14T00:00:00Z",
      "kind" : 3,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "c2d2dc04-1e1b-4224-aa68-24c8ab17df08",
      "date" : "2015-05-17T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "d1c2fad5-700e-4af9-b508-1eb637d3034b",
      "date" : "2015-07-13T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "bacdf762-0b59-4cce-ab5d-9f9580461250",
      "date" : "2015-04-17T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "9a244ddf-5308-4cb3-94cb-2b2869168bd0",
      "date" : "2015-11-01T00:00:00Z",
      "kind" : 2,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "c9d228e5-2f61-4146-a7cc-2fee4d19bcc4",
      "date" : "2016-01-09T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "c68158a1-cf48-4654-aa98-41cf36eb185e",
      "date" : "2016-02-09T00:00:00Z",
      "kind" : 2,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "8591567e-7e81-45f7-9b29-59af4d4e23db",
      "date" : "2016-03-09T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "3d7e7312-4bb3-464e-8282-99baec5f0dea",
      "date" : "2015-07-30T00:00:00Z",
      "kind" : 3,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "3d9655da-d947-416a-ae57-850a93977fe9",
      "date" : "2015-08-09T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "29024976-b713-400a-a7f3-b808a59d2c1a",
      "date" : "2015-12-30T00:00:00Z",
      "kind" : 2,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "3d1a1ab6-3dd1-4f63-9f7b-839c06ea1cbf",
      "date" : "2015-12-26T00:00:00Z",
      "kind" : 2,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "6e0c74bc-e46b-42d2-8e7e-f9c1a539dc3d",
      "date" : "2015-06-05T00:00:00Z",
      "kind" : 3,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "50d4fde7-5719-41ff-abcd-5aa293cef28a",
      "date" : "2016-01-14T00:00:00Z",
      "kind" : 3,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "7780affd-8b45-4705-9cb1-e5a6dc835492",
      "date" : "2015-10-08T00:00:00Z",
      "kind" : 2,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 },
      "location": {
        "lon": 145.01609802246094,
        "lat": -37.8648255980463
      }
    },
    {
      "id" : "c4c81945-ce4b-4046-a465-714824b0afd6",
      "date" : "2016-02-06T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "bbf699e4-1e02-42b4-ace3-698f5ed7c535",
      "date" : "2015-04-29T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "d018b4d0-6a13-4ef1-ae0a-0751d52d389b",
      "date" : "2015-11-30T00:00:00Z",
      "kind" : 2,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "ce8c0d0f-8a29-4401-a304-d937cbea716e",
      "date" : "2016-03-29T00:00:00Z",
      "kind" : 2,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 },
      "location": {
        "lon": 144.98485565185547,
        "lat": -37.77505678240507
      }
    },
    {
      "id" : "09d3c1e2-4ae9-4e3d-b509-048f496a9ab3",
      "date" : "2016-03-18T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "46b60bb5-6cbb-45c7-b26c-c5982920b92a",
      "date" : "2015-12-07T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 },
      "location": {
        "lon": 145.08441925048828,
        "lat": -37.86157304696477
      }
    },
    {
      "id" : "14c37c32-3667-4d23-bcfb-1bf27d5a7533",
      "date" : "2015-10-15T00:00:00Z",
      "kind" : 2,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "d10b3d22-047e-4170-9aad-ad26f8d31bdf",
      "date" : "2016-02-13T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "30420df2-0895-4054-aa9f-4421e016d465",
      "date" : "2015-08-10T00:00:00Z",
      "kind" : 2,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "c51a05cf-b84f-4507-ba64-7d96e3ae2f27",
      "date" : "2015-11-03T00:00:00Z",
      "kind" : 3,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 },
      "location": {
        "lon": 144.86778259277344,
        "lat": -37.779398571318765
      }
    },
    {
      "id" : "63064868-bb3a-46ac-a2a2-80e0a82b7d79",
      "date" : "2015-11-17T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 },
      "location": {
        "lon": 144.88666534423825,
        "lat": -37.80924146650164
      }
    },
    {
      "id" : "09362a26-ab75-46d3-9904-e20308f488ce",
      "date" : "2016-03-15T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "7ef37fb5-a12e-4124-a374-febec9e7b51f",
      "date" : "2015-05-12T00:00:00Z",
      "kind" : 2,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "d2451144-05ec-491f-9cac-739680d29726",
      "date" : "2015-06-13T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "32ea6bb0-79a7-4b60-9e15-8bca2cae79a2",
      "date" : "2015-05-06T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "aa978d3c-18b7-40fa-b7f3-b1029db479ce",
      "date" : "2015-12-23T00:00:00Z",
      "kind" : 2,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "74982008-c289-4d6a-a7e7-5845e8432537",
      "date" : "2016-01-18T00:00:00Z",
      "kind" : 2,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "24ae44b4-6231-4809-9bb9-d4830b8fbe51",
      "date" : "2015-09-29T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "9f491e18-2bbb-462b-837d-1a9bfe219692",
      "date" : "2015-09-26T00:00:00Z",
      "kind" : 3,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "1011a6da-f15c-4eb9-a4f9-702bbc322243",
      "date" : "2016-03-04T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "6bb6721b-986e-4dc0-9d6c-7112b5c4bd03",
      "date" : "2015-10-05T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "e41d7711-8a33-4a6d-a395-f1a32e9b39b8",
      "date" : "2015-08-18T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "bfd4eeab-7477-40b9-8219-b1f739fba899",
      "date" : "2016-03-21T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "e9d6f2ce-04f6-477f-9d2a-e4c2453f144b",
      "date" : "2015-05-21T00:00:00Z",
      "kind" : 2,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "e2a670ba-3f98-4dd5-a08b-f53d7c38fb19",
      "date" : "2015-12-05T00:00:00Z",
      "kind" : 2,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "a9b37d87-047c-491f-85dc-1988b161d106",
      "date" : "2015-10-21T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "280e416d-d8d1-4be4-a53a-8ed31ae2ddcc",
      "date" : "2015-06-07T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "1671edab-fe84-4a69-aa2b-9c66b75f29e4",
      "date" : "2015-06-23T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "48978591-1ab6-49b9-b2e0-bc265fa16363",
      "date" : "2015-11-23T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "88e16409-3907-4952-babf-75f43d02ebba",
      "date" : "2015-08-07T00:00:00Z",
      "kind" : 2,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "ce4dc68c-72b4-4f7b-aa47-c897cfb25f7d",
      "date" : "2015-04-22T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "aabcc317-2080-412f-b939-4f5e04cd6ccd",
      "date" : "2016-01-03T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "398987fb-626c-46b0-8c1b-63d5f835b193",
      "date" : "2016-02-03T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "926eaa03-4a45-4ff6-a304-e03b954ff252",
      "date" : "2015-09-08T00:00:00Z",
      "kind" : 3,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "dfbef769-b1fc-40c8-a1b9-66607e7d024c",
      "date" : "2015-12-24T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "b6e91181-88d2-4090-8722-33a2b07405a6",
      "date" : "2015-07-07T00:00:00Z",
      "kind" : 3,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "bd51b1d3-a152-4b17-8200-e2b38e5ffc7a",
      "date" : "2016-02-23T00:00:00Z",
      "kind" : 3,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "a87477b3-9a1b-40c5-a002-c0905bd1c3fb",
      "date" : "2016-03-01T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "336190d7-d07b-4c70-9a1f-7cce1f86ed59",
      "date" : "2016-03-14T00:00:00Z",
      "kind" : 3,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "657c9cb8-f5da-4ea3-a949-571606f71fc9",
      "date" : "2015-04-12T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "719a9ccc-6df4-4cd9-9167-2b1a24bde5b4",
      "date" : "2015-12-14T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "7862daa2-57e2-4674-8ea6-e3ca40c2163b",
      "date" : "2016-02-05T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "b4070725-dcf7-4015-9919-40ef17454516",
      "date" : "2015-09-23T00:00:00Z",
      "kind" : 3,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "a74d0af0-ae6b-4e8f-92a4-fe7a4eaad866",
      "date" : "2016-01-23T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "79e03bcc-40d1-46e5-b83b-c32f9720c034",
      "date" : "2015-06-26T00:00:00Z",
      "kind" : 3,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "0efa00ca-bc66-40a0-a973-5922c811e716",
      "date" : "2015-09-16T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "a359086d-ac2a-494e-a05f-29b85a66d528",
      "date" : "2016-03-03T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "70899e9d-16cb-483d-8bbf-f9912397255a",
      "date" : "2015-10-23T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "5b75d4cc-585d-453e-857c-59a2da8fba2e",
      "date" : "2015-10-29T00:00:00Z",
      "kind" : 3,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "145272d5-8be8-44d9-967c-4a5f3763df39",
      "date" : "2015-12-17T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "ccd2f0a8-afc1-4565-bcba-07984fcabaf9",
      "date" : "2016-03-24T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "41b0f2c4-a5b4-476c-a4b8-00f9417ac03b",
      "date" : "2016-03-28T00:00:00Z",
      "kind" : 3,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "dc7ef8c2-baff-4f11-9f40-64b184450ade",
      "date" : "2015-11-16T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "25d54811-031d-4266-8a6b-d4fe100dc394",
      "date" : "2015-04-15T00:00:00Z",
      "kind" : 3,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "dfc24609-655e-4768-a607-1e9dc4840d56",
      "date" : "2015-05-01T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "cb96b024-9556-4fbb-8e43-0d39fcc51032",
      "date" : "2016-01-11T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "d1f58008-3014-4358-8eac-b90e77af14a8",
      "date" : "2015-04-20T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "4d416c79-d42c-452c-a07c-e3ccc01ad8fc",
      "date" : "2015-06-15T00:00:00Z",
      "kind" : 2,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "b34c3413-b496-4801-a83a-3cb05cde8ab1",
      "date" : "2015-12-08T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "54654cc9-6c53-4814-bca7-b48a2b9e15fe",
      "date" : "2015-07-14T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "6ba887cc-b1ea-498d-81fe-2914966f991c",
      "date" : "2016-03-11T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "1aa9cb6e-83b4-444d-8180-0c731b4c5147",
      "date" : "2015-11-28T00:00:00Z",
      "kind" : 3,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "ee670103-26f4-47a1-9957-d96411533f85",
      "date" : "2016-01-13T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "fd97be84-00c2-4913-9dbd-81cfb3dc4fc5",
      "date" : "2015-05-19T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "36376108-88c6-48ea-8884-19ce5f5cdc52",
      "date" : "2015-10-25T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "df729791-96c4-4ae6-8cdd-667c7d13b861",
      "date" : "2015-11-08T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "9fdf8df3-40f4-4172-9778-2ddeac92304b",
      "date" : "2015-07-08T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "4aff3dcb-d52c-43cd-acf6-4e40980eac18",
      "date" : "2015-06-02T00:00:00Z",
      "kind" : 2,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "da179779-9ddf-46b1-98a4-1a5b0b80cf23",
      "date" : "2015-08-20T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "02597b40-2be2-4e88-838b-664e099856e7",
      "date" : "2015-09-07T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "ac53cb4a-0609-4b9b-9dcc-4b49d6810797",
      "date" : "2015-08-29T00:00:00Z",
      "kind" : 2,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "03c0f974-f492-468c-9154-a050e3746cb8",
      "date" : "2015-05-20T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "0594e120-7f61-4809-bbd5-872091183dc1",
      "date" : "2015-07-01T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "056ad83c-5b05-40d7-b617-b69648b5a1b3",
      "date" : "2015-07-28T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "453737eb-1898-4950-9795-3c6c5a38bacb",
      "date" : "2015-11-21T00:00:00Z",
      "kind" : 3,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "2152d3e4-9e66-42f5-976e-fd460b051395",
      "date" : "2016-02-14T00:00:00Z",
      "kind" : 2,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "22c921c6-d56b-48df-8ea3-1d543998f129",
      "date" : "2015-09-21T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "5208fff3-049b-4ed1-80a1-10ae9ffaa2f1",
      "date" : "2015-09-09T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "e1d154aa-f7fa-4f2b-9028-17ca850236ee",
      "date" : "2016-01-21T00:00:00Z",
      "kind" : 3,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "4d821814-bb8e-4b19-bb6f-4b0afa674b8d",
      "date" : "2015-10-07T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "30a85b01-4d12-435a-a7ad-945a09a5e5fa",
      "date" : "2015-04-09T00:00:00Z",
      "kind" : 3,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "42ea68ed-1c84-4652-b9e0-1b706faa6228",
      "date" : "2015-06-11T00:00:00Z",
      "kind" : 3,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "fc3e278c-e87e-4658-9bef-1bdcb5600915",
      "date" : "2015-11-25T00:00:00Z",
      "kind" : 2,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "ee703d03-9a65-47f8-8116-27a4d3fad468",
      "date" : "2015-09-17T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "eaf6af48-ad5c-4f5d-8da8-3b7b7e19681d",
      "date" : "2016-02-21T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "6c1af3dd-b814-4930-b91c-420885bc51c4",
      "date" : "2015-09-12T00:00:00Z",
      "kind" : 3,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "ae6dab43-0166-4508-9f68-cedf81060ef5",
      "date" : "2015-09-04T00:00:00Z",
      "kind" : 2,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "0a92960f-3cba-45ed-b6b5-3ef8d3ce6c90",
      "date" : "2016-03-19T00:00:00Z",
      "kind" : 2,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "914e5683-2a46-4990-9a5c-9168310348d2",
      "date" : "2015-07-16T00:00:00Z",
      "kind" : 2,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "2df717e0-cf15-4797-9131-8c33f6dbb39d",
      "date" : "2015-06-29T00:00:00Z",
      "kind" : 2,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "b2215278-09e6-4eb8-9525-0fbad7dc120b",
      "date" : "2016-02-10T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "73ae12ae-26cf-4a89-ab34-ac3034a9b702",
      "date" : "2015-07-19T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "bf1c97a1-ddbe-4b7d-a3a4-de1db5a4fe99",
      "date" : "2015-07-21T00:00:00Z",
      "kind" : 2,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "77322951-34c4-4a04-9c90-7b77506709fc",
      "date" : "2015-08-31T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "4df27950-9228-49bd-accc-356f36ff85e2",
      "date" : "2015-09-28T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "49e2f40a-fc5a-495a-960e-4f5feb022c06",
      "date" : "2015-10-27T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "a8a2c5b9-7eaa-4a34-9a71-d0912974d979",
      "date" : "2015-08-26T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "17d389d3-51d0-4179-bf40-e4cdad727996",
      "date" : "2016-02-15T00:00:00Z",
      "kind" : 3,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "ec4ae9c0-184b-48a3-a317-2bb00fbe1ef9",
      "date" : "2015-08-04T00:00:00Z",
      "kind" : 3,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "459e8e0e-7288-4c1e-8351-26d42509fc17",
      "date" : "2016-02-17T00:00:00Z",
      "kind" : 3,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "99f5392a-7ce0-4cfe-aec5-11be451b241e",
      "date" : "2015-12-01T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "4933e8f5-d05e-4750-bed7-c64563c43b11",
      "date" : "2016-01-29T00:00:00Z",
      "kind" : 2,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "d66a4821-5d5f-48d9-82d4-82fc4e9d87bf",
      "date" : "2015-08-17T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "a2a6f946-2ff6-41e7-96a0-aaa8229dff97",
      "date" : "2015-12-13T00:00:00Z",
      "kind" : 2,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "6cff4a40-5f2c-469f-9fba-e57bd6785259",
      "date" : "2015-05-03T00:00:00Z",
      "kind" : 2,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "f90178ff-5408-4e4b-8884-2a19d4d70278",
      "date" : "2016-01-28T00:00:00Z",
      "kind" : 2,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "9c659b85-d76a-4724-8de4-95d991550837",
      "date" : "2016-03-07T00:00:00Z",
      "kind" : 3,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "c213d236-dbb6-43a7-a433-280012549eb1",
      "date" : "2015-05-10T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "357d48e4-c84d-41a6-9f7c-c1b5fb9e2a80",
      "date" : "2015-10-18T00:00:00Z",
      "kind" : 1,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "de402c61-cdd9-4941-9707-f7b799dc6535",
      "date" : "2015-05-28T00:00:00Z",
      "kind" : 3,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "de22bc5c-8667-4f65-983e-9c9eefd22fac",
      "date" : "2015-07-25T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "7952f088-1651-42ac-a3d4-187d0977b901",
      "date" : "2015-06-22T00:00:00Z",
      "kind" : 2,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "690075ca-edf8-4942-9949-e66d07d3ee22",
      "date" : "2015-11-14T00:00:00Z",
      "kind" : 3,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "f746f14b-a953-4a06-bfb5-ce4752b54a07",
      "date" : "2016-01-05T00:00:00Z",
      "kind" : 3,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    },
    {
      "id" : "465dd4d3-eb42-402a-91eb-c655c5347e0e",
      "date" : "2015-08-14T00:00:00Z",
      "kind" : 2,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Jackie Ng", "id": 1 }
    },
    {
      "id" : "142223a9-93bf-4e87-a3e2-7d6bba039679",
      "date" : "2015-04-14T00:00:00Z",
      "kind" : 3,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Ken Ong", "id": 3 }
    },
    {
      "id" : "7beeffa8-04d5-462e-8a76-fb19339087a3",
      "date" : "2015-11-07T00:00:00Z",
      "kind" : 0,
      "thumbnail" : "",
      "description" : "",
      "user": { "name": "Tracey Nguyen", "id": 2 }
    }
];

export default activities