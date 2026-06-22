# Menu Update Instructions

These are the rules for converting an incoming menu document (Word/text/PDF) into
the typed data in `src/data/menu.ts`. Follow this checklist every time a menu is
updated so the file stays consistent and accurate.

---

## Step 0 — Identify what's being updated

A menu update will be for ONE sub-menu at a time, e.g.:

- Food: `main`, `gluten-free`, `sunday-roasts`, `kids`
- Drinks: `beers`, `gins`, `whisky`, `wine`, `rums`, `tea-coffee-sherry`

Only that sub-menu's `categories` array gets replaced. Do NOT touch other sub-menus.

If a sub-menu name in the document is new (e.g. "Cocktails"), STOP and ask the
user whether to add it as a new sub-menu or merge it into an existing one. Don't
guess.

---

## Step 1 — Preserve the original verbatim

The menu document is the source of truth. Real customers will see this data.
**Never "correct" anything without asking.**

DO NOT change:

- Spellings (e.g. `Caoruun`, `Bas-Armanac`, `Olorosso`, `Maldonaldo`, `Moulineux`,
  `Saint-Émillion`, `Piper Heidseck`, `Valdespina`, `Barosa`, `Peter Lehman`,
  `Chianti Ruffina`, `Selvepiana`) — even if the real-world brand name is different
- Capitalisation of names, prices, notes and notices (`Port wood`, `Double cask`,
  `OR salad`, `NO BUN`)
- Accents or lack of (`Souffle` vs `Soufflé` — original is inconsistent, keep it
  that way per item)
- Punctuation (`*Cuvee de l'ocean*` asterisks, backticks on `` `Loch Gorm` ``,
  wine pipes `|`, `**please help us`, trailing spaces)
- Abbreviations (`baby pot`, `Rasp'`, `Cotes De Thau`)
- Price formats (`£10.50/£16` no spaces, `£49.00/bottle` with slash, beer ABVs
  without `%` symbol like `(3.8)`)
- Compound words (`Crabbies Gingerbeer` one word, `Non-Alcohol Beer` category)
- Whitespace inside descriptions (some have trailing spaces — preserve them)

If something looks like a typo, leave it. If you suspect the document itself has
a NEW typo introduced in this update, ask the user before changing.

The only exception to this rule is the standing editorial conventions in
Step 2 below — those are deliberate decisions already approved by the user.

---

## Step 2 — Agreed normalisations (always applied)

These transformations have been explicitly approved and are applied to every
incoming update without asking:

### 2a. Strip dietary markers from item names

Remove `(V)`, `(Vegan)`, `(v)`, `(vegan)` and similar markers from the `name`
field. Capture the information in the corresponding boolean instead:

- `(V)` → `vegetarian: true`
- `(Vegan)` → `vegan: true`
- For items in the Gluten Free sub-menu, set `glutenFree: true` on every item

Example:

- Original: `"The Orchard's Soup of the Day (V)"`
- In data: `name: "The Orchard's Soup of the Day", vegetarian: true`

Strip these markers from item names ONLY. Leave them inside `description` fields
exactly as written (e.g. "topped with vegetarian parmesan or Feta").

### 2b. Sub-menu metadata stays on the sub-menu, not as items

If the document has lines like:

- "**_ Please make your server aware of any allergies _**"
- "Food Served - Noon 'til 8.30 pm"
- "\*please be advised we do not have a dedicated chip fryer..."

These move to sub-menu-level fields:

- `allergyNotice: "*** Please make your server aware of any allergies ***"`
- `servingHours: "Food Served - Noon 'til 8.30 pm"`
- `chipFryerNotice: "*please be advised we do not have..."`

Preserve the text verbatim including asterisks, capitalisation, punctuation.

### 2c. Category-level notes

If a category has a sub-line like "Available till 4pm" or
"All served with fresh mixed leaves...", that becomes the category's `note`
field — not an item.

### 2d. Sub-menu-level notes for disclaimers and standalone information

If the document has standalone informational lines that aren't tied to a category
(e.g. "Main meal price includes an ice lolly. A selection of soft drinks &
fruit juices are available."), set the sub-menu's `note` field.

### 2e. Items with no price

Items that exist only as footnotes/cross-references (e.g. "Our Sunday Roasts —
see our main menu for details") use `price: ""` (empty string). Never `null`.

### 2f. Empty descriptions

Items in the document with no description should still have `description: ""`
in the data (not omitted) for food items. This keeps the shape consistent.

Exception: items in `beers`, `whisky`, `gins`, `wine`, `rums` categories where
description was never present — those can omit the `description` field entirely.
Use the existing items in those categories as a reference.

---

## Step 3 — Editorial conventions

These are stylistic decisions the user has chosen for how data should be presented.
They apply to the data file consistently, including new entries from updates.

### 3a. Descriptions are sentence-cased

The first letter of every `description` value starts with a capital letter.

Example:

- Document says: `"with crusty bread & butter"`
- Stored as: `"With crusty bread & butter"`

Exceptions:

- Empty descriptions (`""`) stay empty
- Descriptions that already start with a proper noun (e.g. `"Alpha Zeta, Veneto..."`,
  `"Bodega Garzon Estate..."`) need no change — they're already capital
- Do NOT capitalise anywhere else in the description — only the first character

### 3b. Names, prices, notes, notices — NOT touched

The editorial sentence-casing applies ONLY to descriptions. Names, prices, item
notes (`item.note`), category notes (`category.note`), sub-menu notes
(`subMenu.note`), allergy notices, serving hours and chip fryer notices all
remain exactly as in the document.

### 3c. New editorial conventions

If the user introduces a new editorial rule mid-project (e.g. "always end
descriptions with a full stop"), add it here as a new sub-section and apply it
to ALL existing data on the next update so the file stays consistent. Don't
silently introduce conventions — they're all listed here or they don't exist.

---

## Step 4 — Preserve featured items

The `featured: true` flag identifies items shown in the Column 2 cards on the
homepage menu section. The current featured items are:

**Food (`main` sub-menu):**

- Meat, Cheese and Bread selection
- Flat Iron Steak Sandwich
- Fresh Haddock & Hand cut Potato Chips
- The Orchard's Prime Scotch Beef Burger

**Drinks:**

- Peroni (Draught, `beers`)
- Hendrick's (Scottish Gins, `gins`)
- Lagavulin 16 (`whisky`)

**Rules when applying an update:**

1. If a featured item still exists in the updated menu (same name, even if
   description/price changed) → keep `featured: true` on it.
2. If a featured item has been removed from the updated menu → check with the
   user before removing the featured flag elsewhere. They may want to nominate
   a replacement.
3. If a previously featured item appears with a slightly altered name (e.g.
   capitalisation difference, added/removed word), ask the user whether it's
   the same item or a new one.
4. Never invent featured items without being asked.

---

## Step 5 — Pre-conversion checklist

Before writing the updated data, confirm:

- [ ] Which sub-menu's data is being replaced (e.g. "Updating `main`, leaving
      others untouched")
- [ ] How many items the document contains (item count) — verify against the
      final TS file after conversion
- [ ] Whether there are any new categories not in the previous version of this
      sub-menu
- [ ] Whether the `allergyNotice`, `servingHours`, `chipFryerNotice` lines have
      changed
- [ ] Whether any previously featured items are missing from the new document

---

## Step 6 — Post-conversion verification

After writing the update:

1. **Item count check** — count `name:` occurrences in the updated sub-menu and
   compare to the document
2. **Read-back diff** — present the updated sub-menu side-by-side with the
   document and confirm:
   - Every item from the document is in the data
   - No items in the data that aren't in the document
   - All names match character-for-character (excluding stripped dietary markers)
   - All prices match character-for-character
   - All descriptions match character-for-character EXCEPT for the editorial
     sentence-casing convention (3a) — first letter capital, rest verbatim
   - `vegetarian` / `vegan` / `glutenFree` flags align with the original markers
   - `featured` flags preserved on still-existing items
3. **Type check** — confirm the file still satisfies the `SubMenu` type
   (TypeScript will flag this in the editor)
4. **App check** — confirm the dev server reloads without errors

---

## Step 7 — Things that need explicit user approval

NEVER make any of these changes without the user explicitly saying so:

- Adding a new sub-menu (e.g. "Cocktails")
- Removing a sub-menu entirely
- Changing any spelling, capitalisation, or punctuation in original content
  (other than the editorial conventions in Step 3)
- Adding or removing `featured` flags
- Changing prices that look "off"
- Inferring dietary flags from item names (e.g. assuming a salad is vegetarian)
- Collapsing multiple items into one
- Splitting one item into multiple
- Restructuring categories within a sub-menu
- Changing the `id` of an existing sub-menu
- Adding a new editorial convention beyond those in Step 3

If in doubt, ask. The document is the source of truth.

---

## Reference — type shape

For convenience, the types being filled in:

```ts
type MenuItem = {
  name: string;
  price: string;
  description?: string;
  vegetarian?: boolean;
  vegan?: boolean;
  glutenFree?: boolean;
  featured?: boolean;
  note?: string;
};

type MenuCategory = {
  name: string;
  items: MenuItem[];
  note?: string;
};

type SubMenu = {
  id: string; // kebab-case, never changes once set
  name: string; // display name
  type: "food" | "drinks";
  categories: MenuCategory[];
  servingHours?: string;
  allergyNotice?: string;
  chipFryerNotice?: string;
  note?: string;
};
```
