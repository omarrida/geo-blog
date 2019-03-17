# geo-blog
Coding challenge using serverless architecture.

### Installation

#### Option A

```
git clone https://github.com/omarrida/geo-blog
```

```
cd geo-blog
```

```
npm install
```

```
serverless offline start
```

#### Option Col

```
git clone https://github.com/omarrida/geo-blog
```

```
cd geo-blog
```

```
bash col.sh
```

### Show Posts by Nearest User `POST`

**URL**

```
http://localhost:3000/posts/proximity
```

**Body Params**

```json
{
	"geo": {
		"lat": "-43.1234",
	  "lng": "-34.1234"
	}
}
```

**Sample Response**

```json
[
    {
        "userId": 2,
        "id": 11,
        "title": "et ea vero quia laudantium autem",
        "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
    },
    {
        "userId": 2,
        "id": 12,
        "title": "in quibusdam tempore odit est dolorem",
        "body": "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
    },
    {
        "userId": 2,
        "id": 13,
        "title": "dolorum ut in voluptas mollitia et saepe quo animi",
        "body": "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
    }
]
```
