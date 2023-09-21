import { config } from 'dotenv';
import { FixieClient } from "fixie";

// Initialize dotenv so we can get our API key from the environment variable.
config();

const client = FixieClient.Create(undefined, process.env.FIXIE_API_KEY);
const userInfo = await client.userInfo();
const DOCUMENT_COLLECTION_ID = 'TODO';
const QUERY = "TODO";

// Make sure we are logged in.
// console.log(userInfo);

// Query our document collection
client.queryCorpus(DOCUMENT_COLLECTION_ID, QUERY).then((result) => {
    console.log(result);
    }
);

// Another example...
// List our document collections
client.listCorpora().then((result) => {
    console.log(result);
    }
);

// Here's curl example of the queryCorpus API:
// curl -X POST \
//     https://api.fixie.ai/api/v1/corpora/<TODO YOUR DOC COLLECTION ID>:query \
//     -H 'Content-Type: application/json' \
//     -H 'Authorization: Bearer <TODO YOUR FIXIE API KEY>' \
//     -d '{"query": "TODO YOUR QUERY", "max_chunks": 4}'

