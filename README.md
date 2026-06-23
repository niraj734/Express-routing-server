# Express.js HTTP Server with Routing

A simple REST-style server built with Express.js, handling multiple routes and HTTP methods.

## Routes

| Method | Path | Response | Status |
|--------|------|----------|--------|
| GET | `/` | Homepage | 200 |
| GET | `/contact-us` | Contact info | 200 |
| GET | `/tweets` | List of tweets | 200 |
| POST | `/tweets` | Tweet created | 201 |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed

### Install dependencies

```bash
npm install express
```

### Run the server

```bash
node server.js
```

### Test it

**Browser (GET requests):**
```
http://localhost:8000
http://localhost:8000/contact-us
http://localhost:8000/tweets
```

**Terminal (POST request):**
```bash
curl -X POST http://localhost:8000/tweets
```

## How it works

| Part | Description |
|------|-------------|
| `express()` | Creates the app instance |
| `app.get()` | Handles GET requests for a route |
| `app.post()` | Handles POST requests for a route |
| `res.status(201)` | Sets a custom status code |
| `res.end()` | Sends the response |
| `app.listen(8000)` | Starts the server on port `8000` |

## Notes

- Express handles routing and status codes more cleanly than the raw `http` module
- Stop the server with `Ctrl + C`
- Port `8000` can be changed in `server.js`
