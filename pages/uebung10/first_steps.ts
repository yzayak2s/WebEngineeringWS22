/**
 * Reference: https://deno.land/manual@v1.30.0/getting_started/first_steps#hello-world
 */
console.log("Welcome to Deno!");

/**
 * Reference https://deno.land/manual@v1.30.0/getting_started/first_steps#making-an-http-request
 */
const url = Deno.args[0];
const res = await fetch(url);

const body = new Uint8Array(await res.arrayBuffer());
await Deno.stdout.write(body);

/**
 * Reference: https://deno.land/manual@v1.30.0/getting_started/first_steps#reading-a-file
 */
for (const filename of Deno.args) {
    const file = await Deno.open(filename);
    await file.readable.pipeTo(Deno.stdout.writable);
}