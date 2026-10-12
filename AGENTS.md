<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the shared business header and legal footer in the root layout so every page uses the same contact identity and policy navigation.
- Keep the informational home page and standalone policy pages as TanStack file routes; booking is an in-page contact anchor, not an account or checkout flow.
- Use global semantic design tokens and shared styles for the website’s visual system so presentation stays consistent across pages and screen sizes.
