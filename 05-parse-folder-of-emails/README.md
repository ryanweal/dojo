# 05 - Parse a folder of emails

In this project we take a folder of emails, go through the entire folder, and
print out certain parts of the emails that were in the folder. We also do a
bit of cleanup on the body text.

## Usage

You need `node` >=10 or higher because we use `fs.promises`.

1. To install this project run `npm install` in this folder.
2. To use the code in this example, take an export of emails and put them in a
subfolder of this project called `emails`.
3. Finally, run `node index.js` to see the results.

## How to get emails from IMAP?

I used `offlineimap` sync my mailbox down to my computer and then copied the
mails out of the folder I was looking for. Yes - straight outta IMAP!

Note: if you are pulling from an IMAP server in this way you will want to
copy the emails out of the `cur`, `new`, or `tmp` subfolders of the IMAP
folder you are exporting. Put the individual email files into the `emails`
subdirectory of this project. No subfolders of `emails`. Got it?

For that reason this is NOT intended for directly reading your IMAP folders.
Make a copy. Don't do risky things (although that being said, all this does
is read, so you are probably safe doing whatever).

## Other exciting things?

Compared to past dojo we make use of `fs.promises` this time. Also, we
auto-run as an anonymous async function. Woo! Such dojo.