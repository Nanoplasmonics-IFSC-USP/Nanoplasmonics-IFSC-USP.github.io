# Nanoplasmonics Group — IFSC/USP website

Bilingual (English / Portuguese) Jekyll site, hosted on GitHub Pages at
<https://nanoplasmonics-ifsc-usp.github.io>.

You almost never need to touch HTML. **All content lives in `_data/` and `_config.yml`.**

| What you want to change              | File                       |
|--------------------------------------|----------------------------|
| Group name, email, address, links    | `_config.yml`              |
| Page texts (both languages)          | `_data/i18n.yml`           |
| Research lines                       | `_data/research.yml`       |
| Members and alumni                   | `_data/people.yml`         |
| Publications                         | `_data/publications.yml`   |
| News                                 | `_data/news.yml`           |
| Open positions                       | `_data/positions.yml`      |
| Colors and fonts                     | `assets/css/style.css` (top of file) |

Translatable fields always have an `en:` and a `pt:` version.

## Adding photos

| Photo type    | Folder                  | Tips                                  |
|---------------|-------------------------|---------------------------------------|
| People        | `assets/img/people/`    | Square, at least 600×600 px, JPG      |
| Research      | `assets/img/research/`  | Landscape (4:3 or 16:10), ~1600 px wide |
| News          | `assets/img/news/`      | Landscape, ~1600 px wide              |

Then point to it in the data file, e.g. in `_data/people.yml`:

```yaml
  photo: /assets/img/people/maria-silva.jpg
```

Use lowercase file names without spaces or accents (`joao-souza.jpg`, not `João Souza.JPG`).
Keep files under ~500 KB; you can compress them at <https://squoosh.app>.

## Publishing

1. Create a GitHub organization **Nanoplasmonics-IFSC-USP** (or use the account with that name).
2. Create a public repository named exactly **Nanoplasmonics-IFSC-USP.github.io**.
3. Push this folder to it:
   ```bash
   git remote add origin git@github.com:Nanoplasmonics-IFSC-USP/Nanoplasmonics-IFSC-USP.github.io.git
   git push -u origin main
   ```
4. In the repo, go to **Settings → Pages** and set the source to **Deploy from a branch → main / (root)**.

Every push rebuilds the site automatically in about a minute.

## Previewing locally (optional)

Requires Ruby. Run `bundle install`, then `bundle exec jekyll serve` and open <http://localhost:4000>.

## Adding a new page

1. Create a layout in `_layouts/` (copy `news.html` as a starting point).
2. Create `mypage.md` and `pt/mypage.md` with `layout`, `title_key` and `permalink` (see `news.md`).
3. Add the menu entry to `_data/navigation.yml` and its labels to `_data/i18n.yml` under `nav:`.
