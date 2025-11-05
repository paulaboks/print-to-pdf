import { parseArgs } from "@std/cli/parse-args";
import { assert } from "@std/assert";
import puppeteer from "puppeteer-core";

const args = parseArgs(Deno.args);

assert(typeof args.browser_path === "string", "Must pass --browser_path argument");
assert(typeof args.page === "string", "Must pass --page argument");

const browser = await puppeteer.launch({
	executablePath: args.browser_path,
	headless: true,
});

const page = await browser.newPage();

await page.setViewport({ width: args.width ?? 900, height: args.height ?? 1024 });

await page.goto(args.page, { waitUntil: "networkidle0", timeout: 30000 });

// Default wait time is 100 (dunno, it was crashing sometimes with 0 as timeout)
await new Promise((resolve) => setTimeout(resolve, args.wait_time ?? 100));

const pdf_file = await Deno.makeTempFile();

await page.pdf({
	path: pdf_file,
	margin: {
		top: args.margin_top,
		bottom: args.margin_bottom,
		left: args.margin_left,
		right: args.margin_right,
	},
});

await browser.close();

console.log(pdf_file);
