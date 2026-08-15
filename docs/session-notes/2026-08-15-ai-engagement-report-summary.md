# Session Notes — 2026-08-15

## Site Details
- **Site:** Genealogy Site
- **Live URL:** https://byrne-genealogy.pages.dev
- **Repo:** brynestein/genealogy-site

## This Session (Claude Code)

Andrew uploaded a Word document, `An_introduction_to_AI_engagement.docx` (his own
report/reflection, likely coursework), and asked for a summary. No repo files were
touched — this was a standalone document-reading task, not genealogy-site content work.

### What was done
- Read the uploaded `.docx` directly (unzipped and extracted `word/document.xml`
  paragraph text — LibreOffice/`soffice` headless conversion failed to load the file
  in this session for unclear reasons; the unzip route worked fine).
- Summarised the report's contents back to Andrew in chat (not committed to the repo,
  per house style — informational, not site content).

### Summary of the report's content (for reference)

Andrew's reflection on his AI experience so far, ahead of a course:
- Views AI as a fast research aid, with caution about authenticity/training bias.
- Experience to date: Gemini (phone, allotment tips), LiCoWa (cartoon photo effects —
  paused over concerns the free tool might train on uploaded family photos), and a
  Claude subscription used for two projects: (1) helping a retired-miners group
  compile names of colliery workers killed on the job, including his paternal
  grandfather, and (2) **this genealogy site**, via the Claude-built Site Manager AI
  Editor — noted the AI Editor struggled importing a CSV of 200+ people, managing only
  ~10 at a time.
- Background: ex-coalminer; brief "Expert Systems" exposure at college in the early
  1990s, not followed up.
- Course goals: build understanding of AI's ethical/legislative implications, support
  his personal projects, and open a possible employment path.
- Aside: a friend (wine shop owner) has already asked about a "Sommelier" app once the
  course finishes.

## Known Follow-Ups (not urgent)
- None for the genealogy-site repo. Flagging one item from the report that's relevant
  to this project: Andrew's own note that the AI Editor could only import ~10 of 200+
  people from a CSV in one go — worth checking `docs/patterns/` for whether this is a
  known limitation, and considering a documented workaround (batched imports) if
  Andrew hits it again.
