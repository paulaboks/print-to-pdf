# Print to pdf

Simple util to save a page to a pdf file

## Usage

`deno run -A jsr:@paulaboks/print-to-pdf --browser_path "/path/to/browser" --page https://deno.com`

Command line arguments supported:

| Argument     | Description                                                                               |
| ------------ | ----------------------------------------------------------------------------------------- |
| browser_path | Path to the executable of the browser                                                     |
| page         | Url for the page you want to print                                                        |
| wait_time    | Time to wait between the page being open and the printing call (in ms, defaults to 100ms) |
| width        | Width of the viewport                                                                     |
| height       | Height of the viewport                                                                    |
| margin_*     | Top, bottom, left and right margins for the pdf                                           |
