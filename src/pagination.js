module.exports = Pagination = () => ({
  ".pagination": {
    "@apply flex items-center pl-0 list-none text-sm": {},
  },
  ".pagination-link, .pagination-disabled": {
    "@apply px-4 border border-gray-200 no-underline text-gray-800 font-medium transition-colors duration-150 ease-in flex items-center justify-center h-10": {},
    marginLeft: "-1px",
  },
  ".pagination-link svg, .pagination-disabled svg": {
    "@apply h-4 w-4 -mx-1": {},
  },
  ".prose a.pagination-link, .prose .pagination-disabled": {
    "@apply no-underline": {},
  },
  // Sizes
  ".pagination-sm": {
    "@apply text-xs": {},
  },
  ".pagination-sm .pagination-link, .pagination-sm .pagination-disabled": {
    "@apply h-6": {},
  },
  ".pagination-sm .pagination-link svg, .pagination-sm .pagination-disabled svg": {
    "@apply h-3 w-3": {},
  },
  ".pagination-lg": {
    "@apply text-xl": {},
  },
  ".pagination-lg .pagination-link, .pagination-lg .pagination-disabled": {
    "@apply h-12": {},
  },
  ".pagination-lg .pagination-link svg, .pagination-lg .pagination-disabled svg": {
    "@apply h-6 w-6": {},
  },
  ".pagination-link:hover": {
    "@apply bg-gray-200": {},
  },
  ".pagination-disabled": {
    "@apply bg-gray-100 text-gray-700 pointer-events-none cursor-default !important": {},
  },
  ".pagination-link:focus, .pagination-link:active": {
    "@apply shadow-outline outline-none z-10": {},
  },
  ".pagination-disabled:focus, .pagination-disabled:active": {
    "@apply outline-none": {},
  },
  ".pagination-link:first-child, .pagination-disabled:first-child": {
    "@apply ml-0 rounded-l": {},
  },
  ".pagination-link:last-child, .pagination-disabled:last-child": {
    "@apply rounded-r": {},
  },
  ".pagination-active, .prose a.pagination-active": {
    "@apply bg-primary border-primary text-white": {},
    "&:hover, &:focus": {
      "@apply bg-primary-dark border-primary-dark": {},
    },
  },
});
