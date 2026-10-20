/* @ds-bundle: {"format":4,"namespace":"BeGiantDesignSystem_f91809","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"ButtonUtilityOutline","sourcePath":"components/core/ButtonUtilityOutline.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"CardHeader","sourcePath":"components/core/Card.jsx"},{"name":"CardTitle","sourcePath":"components/core/Card.jsx"},{"name":"CardDescription","sourcePath":"components/core/Card.jsx"},{"name":"CardContent","sourcePath":"components/core/Card.jsx"},{"name":"CardFooter","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Separator","sourcePath":"components/core/Separator.jsx"},{"name":"Skeleton","sourcePath":"components/core/Skeleton.jsx"},{"name":"ArticleCard","sourcePath":"components/editorial/ArticleCard.jsx"},{"name":"ArticleCardSmall","sourcePath":"components/editorial/ArticleCardSmall.jsx"},{"name":"AuthorByline","sourcePath":"components/editorial/AuthorByline.jsx"},{"name":"DateDisplay","sourcePath":"components/editorial/DateDisplay.jsx"},{"name":"Eyebrow","sourcePath":"components/editorial/Eyebrow.jsx"},{"name":"FigureCaption","sourcePath":"components/editorial/FigureCaption.jsx"},{"name":"CircledArrow","sourcePath":"components/editorial/LinkMore.jsx"},{"name":"LinkMore","sourcePath":"components/editorial/LinkMore.jsx"},{"name":"RailCard","sourcePath":"components/editorial/RailCard.jsx"},{"name":"SectionHeading","sourcePath":"components/editorial/SectionHeading.jsx"},{"name":"TopicBadge","sourcePath":"components/editorial/TopicBadge.jsx"},{"name":"EditorialNotice","sourcePath":"components/feedback/EditorialNotice.jsx"},{"name":"ShareTools","sourcePath":"components/feedback/ShareTools.jsx"},{"name":"NewsletterForm","sourcePath":"components/forms/NewsletterForm.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"HeaderNav","sourcePath":"components/navigation/HeaderNav.jsx"},{"name":"PillarFilterBar","sourcePath":"components/navigation/PillarFilterBar.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"3c6e00997bc9","components/core/Button.jsx":"ee4c0c2d8f78","components/core/ButtonUtilityOutline.jsx":"c2d04cf71ff7","components/core/Card.jsx":"8d7412d42c97","components/core/Icon.jsx":"531b637f7e21","components/core/Input.jsx":"dd5ea5cb750b","components/core/Separator.jsx":"5f1499a2388a","components/core/Skeleton.jsx":"7d93235c11bc","components/editorial/ArticleCard.jsx":"d786eac3c737","components/editorial/ArticleCardSmall.jsx":"b885005091b4","components/editorial/AuthorByline.jsx":"125260a605e8","components/editorial/DateDisplay.jsx":"59e42a79d221","components/editorial/Eyebrow.jsx":"3b2976f55bdd","components/editorial/FigureCaption.jsx":"43906812baee","components/editorial/LinkMore.jsx":"2b9a6068fc5f","components/editorial/RailCard.jsx":"196f4f119f43","components/editorial/SectionHeading.jsx":"7dbd70ab84b5","components/editorial/TopicBadge.jsx":"ed0f2b110072","components/feedback/EditorialNotice.jsx":"66aec514c641","components/feedback/ShareTools.jsx":"b97998f8b6aa","components/forms/NewsletterForm.jsx":"6bffa48c0f78","components/navigation/Breadcrumb.jsx":"09c467ca6271","components/navigation/Footer.jsx":"1084cc165497","components/navigation/HeaderNav.jsx":"e408ce8cded4","components/navigation/PillarFilterBar.jsx":"fe33d8b2182a","ui_kits/website/ArticleScreen.jsx":"8e62a98bcbf5","ui_kits/website/AuthorScreen.jsx":"c4987ffdf9a5","ui_kits/website/Homepage.jsx":"3a953cad8fd7","ui_kits/website/Media.jsx":"28a3a6b1050b","ui_kits/website/StoriesIndex.jsx":"0402289a787f","ui_kits/website/data.js":"2e0c4e367818"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BeGiantDesignSystem_f91809 = window.BeGiantDesignSystem_f91809 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BADGE_VARIANTS = {
  default: {
    background: 'var(--primary)',
    color: 'var(--primary-foreground)',
    borderColor: 'transparent'
  },
  secondary: {
    background: 'var(--secondary)',
    color: 'var(--secondary-foreground)',
    borderColor: 'transparent'
  },
  destructive: {
    background: 'var(--destructive)',
    color: '#fff',
    borderColor: 'transparent'
  },
  outline: {
    background: 'transparent',
    color: 'var(--foreground)',
    borderColor: 'var(--border)'
  }
};

/** Small status/count chip. Editorial category labels use TopicBadge instead. */
function Badge({
  variant = 'default',
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: 'var(--radius-md)',
      border: '1px solid',
      padding: '2px 10px',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      lineHeight: 1.4,
      ...BADGE_VARIANTS[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANTS = {
  default: {
    background: 'var(--primary)',
    color: 'var(--primary-foreground)',
    border: '1px solid transparent',
    boxShadow: '0 1px 2px rgba(0,0,0,.05)'
  },
  secondary: {
    background: 'var(--secondary)',
    color: 'var(--secondary-foreground)',
    border: '1px solid transparent'
  },
  outline: {
    background: 'var(--background)',
    color: 'var(--foreground)',
    border: '1px solid var(--input)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--foreground)',
    border: '1px solid transparent'
  },
  destructive: {
    background: 'var(--destructive)',
    color: '#fff',
    border: '1px solid transparent'
  },
  link: {
    background: 'transparent',
    color: 'var(--primary)',
    border: '1px solid transparent',
    textDecoration: 'underline',
    textUnderlineOffset: '4px'
  }
};
const SIZES = {
  default: {
    height: 36,
    padding: '0 16px',
    fontSize: 14
  },
  sm: {
    height: 32,
    padding: '0 12px',
    fontSize: 12
  },
  lg: {
    height: 40,
    padding: '0 32px',
    fontSize: 14
  },
  icon: {
    height: 36,
    width: 36,
    padding: 0,
    fontSize: 14
  }
};

/** shadcn-derived Button as configured in the Be Giant app (radius-md, 250ms colour transition). */
function Button({
  variant = 'default',
  size = 'default',
  disabled,
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      whiteSpace: 'nowrap',
      borderRadius: 'var(--radius-md)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      lineHeight: 1,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background-color var(--duration-default), color var(--duration-default), opacity var(--duration-default)',
      ...VARIANTS[variant],
      ...SIZES[size],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Product card container (rounded, bordered, shadowed). Editorial story cards are borderless — see ArticleCard. */
function Card({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: 'var(--radius-xl)',
      border: '1px solid var(--border)',
      background: 'var(--card)',
      color: 'var(--card-foreground)',
      boxShadow: '0 1px 3px rgba(0,0,0,.08)',
      ...style
    }
  }, rest), children);
}
function CardHeader({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      padding: 24,
      ...style
    }
  }, rest), children);
}
function CardTitle({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      lineHeight: 1,
      letterSpacing: 'var(--tracking-heading)',
      ...style
    }
  }, rest), children);
}
function CardDescription({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      fontSize: 14,
      color: 'var(--muted-foreground)',
      ...style
    }
  }, rest), children);
}
function CardContent({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      padding: '0 24px 24px',
      ...style
    }
  }, rest), children);
}
function CardFooter({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      padding: '0 24px 24px',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Wrapper for the brand's own SVG icon set (assets/icons/*.svg). The app ships
 * these as files and loads them via <img>/next/image, so this does the same —
 * no inline path data, no substitute icon library.
 */
function Icon({
  name,
  size = 20,
  alt = '',
  invert = false,
  basePath = '../../assets/icons',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("img", _extends({
    src: `${basePath}/${name}.svg`,
    alt: alt,
    "aria-hidden": alt ? undefined : true,
    width: size,
    height: size,
    style: {
      width: size,
      height: size,
      flexShrink: 0,
      display: 'block',
      filter: invert ? 'brightness(0) invert(1)' : undefined,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/ButtonUtilityOutline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Figma Utility/Button outline — 36px tall, 8px padding and gap, 1px border,
 * 14/100 uppercase, hover drops to 80% opacity. Renders as <a> when href is set.
 */
function ButtonUtilityOutline({
  children,
  href,
  showIcon = true,
  style,
  ...rest
}) {
  const Tag = href ? 'a' : 'button';
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      height: 36,
      padding: '0 8px',
      gap: 8,
      justifyContent: 'center',
      alignItems: 'center',
      width: 'fit-content',
      border: 'var(--border-width-primary) solid var(--border)',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 'var(--text-button)',
      lineHeight: 'var(--text-button-lh)',
      letterSpacing: '0.025em',
      textTransform: 'uppercase',
      color: 'var(--ink)',
      opacity: hover ? 'var(--hover-opacity-soft)' : 1,
      transition: 'opacity var(--duration-fast) ease',
      cursor: 'pointer',
      ...style
    }
  }, rest), showIcon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "icon-arrow-top",
    size: 20
  }), children);
}
Object.assign(__ds_scope, { ButtonUtilityOutline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ButtonUtilityOutline.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** 36px field, 1px --input border, radius-md, 14px text on desktop. */
function Input({
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("input", _extends({
    style: {
      display: 'flex',
      height: 36,
      width: '100%',
      boxSizing: 'border-box',
      borderRadius: 'var(--radius-md)',
      border: '1px solid var(--input)',
      background: 'transparent',
      padding: '4px 12px',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--foreground)',
      boxShadow: '0 1px 2px rgba(0,0,0,.05)',
      outline: 'none',
      transition: 'border-color var(--duration-default)',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Separator.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Section rule. Horizontal = 1px --border-strong (Grey 500); vertical for filter bars. */
function Separator({
  orientation = 'horizontal',
  strong = true,
  style,
  ...rest
}) {
  const color = strong ? 'var(--border-strong)' : 'var(--border)';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "separator",
    "aria-orientation": orientation,
    style: orientation === 'horizontal' ? {
      height: 1,
      width: '100%',
      background: color,
      flexShrink: 0,
      ...style
    } : {
      width: 1,
      height: '100%',
      background: color,
      flexShrink: 0,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Separator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Separator.jsx", error: String((e && e.message) || e) }); }

// components/core/Skeleton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Loading placeholder — muted cream block, radius-md, slow pulse. */
function Skeleton({
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--muted)',
      borderRadius: 'var(--radius-md)',
      animation: 'bg-pulse 2s cubic-bezier(.4,0,.6,1) infinite',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/editorial/DateDisplay.jsx
try { (() => {
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

/** House date format: "September 2, 2026" (date-fns 'LLLL d, yyyy' in the app). */
function DateDisplay({
  dateString,
  style
}) {
  if (!dateString) return null;
  const d = new Date(dateString);
  if (isNaN(d.getTime())) return null;
  return /*#__PURE__*/React.createElement("time", {
    dateTime: dateString,
    style: style
  }, `${MONTHS[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`);
}
Object.assign(__ds_scope, { DateDisplay });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/DateDisplay.jsx", error: String((e && e.message) || e) }); }

// components/editorial/AuthorByline.jsx
try { (() => {
/**
 * Byline row: "By Name, Name" + date + optional read time and photo credit,
 * all on one line at 14px. Author names carry medium weight; the rest is regular.
 */
function AuthorByline({
  authors = [],
  dateString,
  readTime,
  photoCredit,
  photoCreditLabel = 'Photos by',
  prefix = 'By',
  light = false,
  style
}) {
  const color = light ? 'var(--primary-foreground)' : 'var(--ink)';
  const parts = [];
  if (authors.length) {
    parts.push(/*#__PURE__*/React.createElement("span", {
      key: "authors"
    }, prefix ? prefix + ' ' : '', authors.map((a, i) => /*#__PURE__*/React.createElement("span", {
      key: a.name || i
    }, i > 0 && ', ', a.href ? /*#__PURE__*/React.createElement("a", {
      href: a.href,
      style: {
        fontWeight: 500,
        color,
        textDecoration: 'none'
      }
    }, a.name) : /*#__PURE__*/React.createElement("span", {
      style: {
        fontWeight: 500
      }
    }, a.name)))));
  }
  if (photoCredit) parts.push(/*#__PURE__*/React.createElement("span", {
    key: "credit"
  }, photoCreditLabel, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500
    }
  }, photoCredit)));
  if (dateString) parts.push(/*#__PURE__*/React.createElement(__ds_scope.DateDisplay, {
    key: "date",
    dateString: dateString
  }));
  if (readTime) parts.push(/*#__PURE__*/React.createElement("span", {
    key: "read"
  }, readTime, " min read"));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: '0 4px',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      lineHeight: 1.4,
      color,
      ...style
    }
  }, parts.map((p, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      opacity: 0.55
    }
  }, "\xB7"), p)));
}
Object.assign(__ds_scope, { AuthorByline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/AuthorByline.jsx", error: String((e && e.message) || e) }); }

// components/editorial/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** AG Eyebrow — Gibson SemiBold 14/100 uppercase. Section labels, menu column heads, rail labels. */
function Eyebrow({
  children,
  as: Tag = 'span',
  light = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 'var(--text-eyebrow)',
      lineHeight: 'var(--text-eyebrow-lh)',
      textTransform: 'uppercase',
      color: light ? 'var(--primary-foreground)' : 'var(--ink)',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/editorial/FigureCaption.jsx
try { (() => {
/** Caption + credit under an image. 12px, muted; credit runs after the caption in the same line. */
function FigureCaption({
  caption,
  credit,
  light = false,
  align = 'left',
  style
}) {
  if (!caption && !credit) return null;
  return /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-image-credit)',
      lineHeight: 1.3,
      textAlign: align,
      color: light ? 'rgba(255,255,255,.85)' : 'var(--ink-muted)',
      ...style
    }
  }, caption, caption && credit ? ' ' : '', credit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic'
    }
  }, credit));
}
Object.assign(__ds_scope, { FigureCaption });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/FigureCaption.jsx", error: String((e && e.message) || e) }); }

// components/editorial/LinkMore.jsx
try { (() => {
const ARROW_PATHS = {
  right: {
    chevron: 'M24 31.999L32 23.999L24 15.999',
    line: 'M15.9995 24H31.9995'
  },
  left: {
    chevron: 'M24 31.999L16 23.999L24 15.999',
    line: 'M31.9995 24H15.9995'
  }
};

/** Circled hairline arrow. On hover of the parent LinkMore it scales 1.1 and fills brand red. */
function CircledArrow({
  direction = 'right',
  size = 20,
  hover = false
}) {
  const {
    chevron,
    line
  } = ARROW_PATHS[direction === 'left' ? 'left' : 'right'];
  const stroke = hover ? '#fff' : 'currentColor';
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    width: size,
    height: size,
    "aria-hidden": "true",
    style: {
      flexShrink: 0,
      transform: hover ? 'scale(1.1)' : 'none',
      transition: 'transform var(--duration-fast) ease-out'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "24",
    cy: "24",
    r: "20",
    fill: hover ? 'var(--color-red)' : 'transparent',
    style: {
      transition: 'fill .2s ease'
    }
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "24",
    cy: "24",
    r: "20",
    fill: "none",
    stroke: hover ? 'var(--color-red)' : 'currentColor',
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("path", {
    d: chevron,
    fill: "none",
    stroke: stroke,
    strokeWidth: "1",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: line,
    fill: "none",
    stroke: stroke,
    strokeWidth: "1",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}

/** "View more" / "See all" row — uppercase 14px label plus circled arrow. */
function LinkMore({
  label,
  href,
  arrow = 'right',
  style
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = href ? 'a' : 'span';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-button)',
      lineHeight: 'var(--text-button-lh)',
      textTransform: 'uppercase',
      color: 'var(--ink)',
      textDecoration: hover ? 'underline' : 'none',
      whiteSpace: 'nowrap',
      ...style
    }
  }, label, /*#__PURE__*/React.createElement(CircledArrow, {
    direction: arrow,
    hover: hover
  }));
}
Object.assign(__ds_scope, { CircledArrow, LinkMore });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/LinkMore.jsx", error: String((e && e.message) || e) }); }

// components/editorial/RailCard.jsx
try { (() => {
/** "Latest" rail card: top hairline rule, 600:350 image, serif H5 headline, dek, byline. */
function RailCard({
  article,
  showThumbnail = true,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      borderTop: '1px solid var(--border-strong)',
      padding: '16px 0',
      ...style
    }
  }, showThumbnail && article.image && /*#__PURE__*/React.createElement("a", {
    href: article.href,
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '600 / 350',
      width: '100%',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: article.image,
    alt: article.imageAlt || '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }))), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-h5)',
      fontWeight: 400,
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: article.href,
    style: {
      color: 'inherit',
      textDecoration: hover ? 'underline' : 'none'
    }
  }, article.title)), article.dek && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.4,
      color: 'var(--foreground)'
    }
  }, article.dek), /*#__PURE__*/React.createElement(__ds_scope.AuthorByline, {
    authors: article.authors,
    dateString: article.publishedAt,
    prefix: "",
    style: {
      fontSize: 12,
      color: 'var(--ink-muted)'
    }
  }));
}
Object.assign(__ds_scope, { RailCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/RailCard.jsx", error: String((e && e.message) || e) }); }

// components/editorial/SectionHeading.jsx
try { (() => {
/** Section head row: serif H3 title ("Recent", "Trending") with an optional "See all" link at the right. */
function SectionHeading({
  children,
  as: Tag = 'h2',
  moreLabel,
  moreHref,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 24,
      ...style
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    className: "heading-section",
    style: {
      margin: 0
    }
  }, children), moreLabel && /*#__PURE__*/React.createElement(__ds_scope.LinkMore, {
    label: moreLabel,
    href: moreHref
  }));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/editorial/TopicBadge.jsx
try { (() => {
const FALLBACK_TOPIC_COLOR = '#DCD6FF';

/**
 * Topic / franchise label: a 12px square colour chip + 12px uppercase label.
 * Franchise topics carry their own colour; plain topics use Topic Neutral.
 */
function TopicBadge({
  title,
  color,
  isFranchise = false,
  light = false,
  href,
  style
}) {
  if (!title) return null;
  const swatch = isFranchise ? color || FALLBACK_TOPIC_COLOR : FALLBACK_TOPIC_COLOR;
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      textDecoration: 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 1,
      width: 12,
      height: 12,
      flexShrink: 0,
      borderRadius: 0,
      background: swatch
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 'var(--text-franchise)',
      lineHeight: 'var(--text-franchise-lh)',
      textTransform: 'uppercase',
      color: light ? 'var(--primary-foreground)' : 'var(--ink)'
    }
  }, title));
}
Object.assign(__ds_scope, { TopicBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/TopicBadge.jsx", error: String((e && e.message) || e) }); }

// components/editorial/ArticleCard.jsx
try { (() => {
/**
 * Standard story teaser: 16:9 square-cornered image that scales 1.05 on hover,
 * topic badge, serif headline, dek, byline. No border, no shadow, no radius.
 */
function ArticleCard({
  article,
  size = 'default',
  aspect = '16 / 9',
  style
}) {
  const [hover, setHover] = React.useState(false);
  const titleClass = size === 'large' ? 'heading-article-lg' : 'heading-article';
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      minWidth: 0,
      ...style
    }
  }, article.image && /*#__PURE__*/React.createElement("a", {
    href: article.href,
    style: {
      display: 'block',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: aspect,
      width: '100%',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: article.image,
    alt: article.imageAlt || article.title || '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transform: hover ? 'scale(var(--media-hover-scale))' : 'none',
      transition: 'transform var(--duration-media) ease'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, article.topic && /*#__PURE__*/React.createElement(__ds_scope.TopicBadge, {
    title: article.topic,
    color: article.topicColor,
    isFranchise: Boolean(article.topicColor)
  }), /*#__PURE__*/React.createElement("h3", {
    className: titleClass,
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: article.href,
    style: {
      color: 'inherit',
      textDecoration: hover ? 'underline' : 'none'
    }
  }, article.title)), article.dek && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      lineHeight: 1.4,
      color: 'var(--foreground)'
    }
  }, article.dek), /*#__PURE__*/React.createElement(__ds_scope.AuthorByline, {
    authors: article.authors,
    dateString: article.publishedAt,
    prefix: "",
    style: {
      fontSize: 12,
      color: 'var(--ink-muted)'
    }
  })));
}
Object.assign(__ds_scope, { ArticleCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/ArticleCard.jsx", error: String((e && e.message) || e) }); }

// components/editorial/ArticleCardSmall.jsx
try { (() => {
/** Horizontal teaser: square thumbnail (120–138px) left, topic + headline + byline right. */
function ArticleCardSmall({
  article,
  thumbSize = 120,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: thumbSize,
      height: thumbSize,
      flexShrink: 0,
      overflow: 'hidden',
      background: 'var(--surface-neutral)'
    }
  }, article.image && /*#__PURE__*/React.createElement("a", {
    href: article.href,
    style: {
      display: 'block',
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: article.image,
    alt: article.imageAlt || '',
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transform: hover ? 'scale(var(--media-hover-scale))' : 'none',
      transition: 'transform var(--duration-media) ease'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flex: 1,
      minWidth: 0,
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 6
    }
  }, article.topic && /*#__PURE__*/React.createElement(__ds_scope.TopicBadge, {
    title: article.topic,
    color: article.topicColor,
    isFranchise: Boolean(article.topicColor)
  }), /*#__PURE__*/React.createElement("h3", {
    className: "heading-article",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: article.href,
    style: {
      color: 'inherit',
      textDecoration: hover ? 'underline' : 'none'
    }
  }, article.title)), /*#__PURE__*/React.createElement(__ds_scope.AuthorByline, {
    authors: article.authors,
    dateString: article.publishedAt,
    prefix: "",
    style: {
      fontSize: 12,
      color: 'var(--ink-muted)'
    }
  })));
}
Object.assign(__ds_scope, { ArticleCardSmall });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editorial/ArticleCardSmall.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EditorialNotice.jsx
try { (() => {
const NOTICE_LABELS = {
  correction: 'Correction',
  clarification: 'Clarification',
  note: "Editor's note"
};

/** Correction / clarification / editor's note banner inside an article body. */
function EditorialNotice({
  kind = 'correction',
  date,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      borderTop: '1px solid var(--border-strong)',
      borderBottom: '1px solid var(--border-strong)',
      padding: '16px 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 'var(--text-eyebrow)',
      lineHeight: 1,
      textTransform: 'uppercase',
      color: 'var(--color-red)'
    }
  }, NOTICE_LABELS[kind], date ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-muted)',
      fontWeight: 400
    }
  }, " \xB7 ", date) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      lineHeight: 1.4,
      color: 'var(--ink)'
    }
  }, children));
}
Object.assign(__ds_scope, { EditorialNotice });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EditorialNotice.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ShareTools.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Share affordance in the article meta bar: circled share glyph plus label. */
function ShareTools({
  label = 'Share',
  iconBase = '../../assets/icons',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      border: 0,
      background: 'none',
      padding: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--foreground)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "icon-circled-share",
    size: 20,
    basePath: iconBase
  }), label);
}
Object.assign(__ds_scope, { ShareTools });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ShareTools.jsx", error: String((e && e.message) || e) }); }

// components/forms/NewsletterForm.jsx
try { (() => {
/**
 * Newsletter capture. The cream panel variant is the one used on article
 * sidebars and pillar pages; 'inline' is the bare email + Subscribe row.
 */
function NewsletterForm({
  heading = 'Giant stories',
  body,
  variant = 'panel',
  illustrationSrc,
  state = 'idle',
  style
}) {
  const form = /*#__PURE__*/React.createElement("form", {
    onSubmit: e => e.preventDefault(),
    style: {
      display: 'flex',
      gap: 8,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Input, {
    type: "email",
    placeholder: "your@email.com",
    "aria-label": "Email address",
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      padding: '0 16px',
      height: 36,
      background: 'var(--primary)',
      color: 'var(--primary-foreground)',
      border: 0,
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 500,
      whiteSpace: 'nowrap',
      transition: 'transform var(--duration-default), background-color var(--duration-default)'
    }
  }, state === 'loading' ? 'Subscribing…' : 'Subscribe'));
  if (state === 'success') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        borderRadius: 'var(--radius-full)',
        border: '1px solid rgba(23,23,23,.15)',
        background: 'rgba(23,23,23,.04)',
        padding: '8px 16px',
        ...style
      }
    }, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": true,
      style: {
        display: 'inline-flex',
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        background: 'var(--foreground)',
        color: 'var(--background)',
        fontSize: 11,
        lineHeight: 1
      }
    }, "\u2713"), /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        fontWeight: 500,
        color: 'var(--foreground)'
      }
    }, "Thanks for subscribing! You're on the list."));
  }
  if (variant === 'inline') return /*#__PURE__*/React.createElement("div", {
    style: style
  }, form);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-cream)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 32,
      padding: 24,
      ...style
    }
  }, illustrationSrc && /*#__PURE__*/React.createElement("img", {
    src: illustrationSrc,
    alt: "",
    style: {
      height: 52,
      objectFit: 'contain'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontWeight: 300,
      fontSize: 40,
      lineHeight: 0.9,
      letterSpacing: '-0.49px',
      textAlign: 'center',
      color: 'var(--ink)'
    }
  }, heading), body && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      lineHeight: 1.4,
      textAlign: 'center',
      color: 'var(--ink)'
    }
  }, body), form);
}
Object.assign(__ds_scope, { NewsletterForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/NewsletterForm.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
/** Home › Pillar trail. 14px, muted, chevron separators. */
function Breadcrumb({
  items = [],
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Breadcrumb",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      ...style
    }
  }, items.map((item, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: item.label
  }, i > 0 && /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--ink-muted)",
    strokeWidth: "2",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M9 18l6-6-6-6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), item.href ? /*#__PURE__*/React.createElement("a", {
    href: item.href,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      lineHeight: '21px',
      color: 'var(--ink-muted)',
      textDecoration: 'none'
    }
  }, item.label) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      lineHeight: '21px',
      color: 'var(--ink-muted)'
    }
  }, item.label))));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
const DEFAULT_BLURB = "A non-profit, non-partisan publication reporting on the people, places, ideas and breakthroughs shaping Canada's future.";

/**
 * Ink footer: link columns left, serif blurb right, giant wordmark across the
 * bottom, with the paper texture layered at 40% in soft-light.
 */
function Footer({
  groups = [],
  social = [],
  blurb = DEFAULT_BLURB,
  address,
  legal = [],
  logoSrc = '../../assets/logo-be-giant.svg',
  textureSrc = '../../assets/textures/footer-texture.png',
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--ink)',
      padding: '66px 0',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      inset: 0,
      backgroundImage: `url('${textureSrc}')`,
      backgroundSize: '310px 310px',
      opacity: 0.4,
      mixBlendMode: 'soft-light',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 10,
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      color: 'var(--primary-foreground)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-container",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 48,
      flexWrap: 'wrap'
    }
  }, groups.map(g => /*#__PURE__*/React.createElement("nav", {
    key: g.title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      fontWeight: 500,
      textTransform: 'uppercase',
      lineHeight: 1.4,
      whiteSpace: 'nowrap'
    }
  }, g.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      listStyle: 'none',
      margin: 0,
      padding: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      lineHeight: 1.4
    }
  }, g.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit',
      textDecoration: 'none',
      whiteSpace: 'nowrap'
    }
  }, l)))))), social.length > 0 && /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      fontWeight: 500,
      textTransform: 'uppercase',
      lineHeight: 1.4
    }
  }, "Follow Us"), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      listStyle: 'none',
      margin: 0,
      padding: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      lineHeight: 1.4
    }
  }, social.map(s => /*#__PURE__*/React.createElement("li", {
    key: s
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, s)))))), (address || legal.length > 0) && /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Contact and legal",
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: '0 12px',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      lineHeight: 1.4
    }
  }, address && /*#__PURE__*/React.createElement("span", null, address), legal.map((l, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: l
  }, (address || i > 0) && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      opacity: 0.35
    }
  }, "|"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'inherit',
      textDecoration: 'none',
      whiteSpace: 'nowrap'
    }
  }, l))))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 429,
      fontFamily: 'var(--font-serif)',
      fontSize: 26,
      fontWeight: 400,
      lineHeight: 1.3,
      letterSpacing: '-0.49px',
      textAlign: 'right'
    }
  }, blurb))), /*#__PURE__*/React.createElement("div", {
    className: "bg-container",
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Be Giant",
    style: {
      width: '100%',
      height: 'auto',
      filter: 'brightness(0) invert(1)',
      display: 'block'
    }
  }))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/HeaderNav.jsx
try { (() => {
/**
 * Fixed site header: primary links left, centred wordmark, search + Menu right.
 * The Menu button opens a full-width mega panel (Pillars / Series / Topics / About us).
 * On the homepage the real app scrubs the logo from 250px tall down to 48px on
 * first scroll — pass compact={false} to show the expanded state.
 */
function HeaderNav({
  primaryNav = ['People', 'Places', 'Ideas'],
  pillars = [],
  series = [],
  topics = [],
  pages = [],
  logoSrc = '../../assets/logo-be-giant.svg',
  iconBase = '../../assets/icons',
  compact = true,
  menuOpen = false,
  onToggleMenu,
  onSearch,
  style
}) {
  const height = compact ? 48 : 110;
  const logoWidth = compact ? 112 : 420;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      ...style
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      height,
      background: 'var(--background)',
      boxShadow: 'var(--shadow-header)',
      overflow: menuOpen ? 'visible' : 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-container",
    style: {
      position: 'relative',
      height: '100%',
      display: 'flex',
      alignItems: compact ? 'center' : 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 44,
      height: '100%',
      width: '100%',
      alignItems: compact ? 'center' : 'flex-start'
    },
    "aria-label": "Main navigation"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flex: 1,
      minWidth: 0,
      alignItems: 'center',
      gap: 16,
      padding: '16px 0'
    }
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      listStyle: 'none',
      margin: 0,
      padding: 0
    }
  }, primaryNav.map(label => /*#__PURE__*/React.createElement("li", {
    key: label
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-heading)',
      color: 'var(--ink)',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      textDecoration: 'none'
    }
  }, label))))), /*#__PURE__*/React.createElement("a", {
    href: "#",
    "aria-label": "Be Giant",
    style: {
      display: 'flex',
      height: '100%',
      width: logoWidth,
      flexShrink: 0,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Be Giant",
    style: {
      width: '100%',
      height: 'min(80%, 300px)',
      objectFit: 'contain'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flex: 1,
      minWidth: 0,
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 16,
      padding: '16px 0'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Search",
    onClick: onSearch,
    style: {
      border: 0,
      background: 'none',
      padding: 0,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "icon-search",
    size: 18,
    basePath: iconBase
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onToggleMenu,
    "aria-expanded": menuOpen,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      border: 0,
      background: 'none',
      padding: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-heading)',
      color: 'var(--ink)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      lineHeight: 1
    }
  }, menuOpen ? 'Close' : 'Menu'), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: menuOpen ? 'icon-circled-close' : 'icon-menu',
    size: 16,
    basePath: iconBase
  })))))), menuOpen && /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-label": "Site navigation menu",
    style: {
      position: 'absolute',
      top: height,
      left: 0,
      right: 0,
      zIndex: 950,
      borderBottom: '1px solid var(--border-strong)',
      background: 'var(--background)',
      boxShadow: '0 10px 15px -3px rgba(0,0,0,.1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-container",
    style: {
      padding: '48px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: '1px solid var(--border-strong)',
      padding: '0 40px 0 32px'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    as: "h3",
    style: {
      display: 'block',
      marginBottom: 24
    }
  }, "Pillars"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, pillars.map(p => /*#__PURE__*/React.createElement("a", {
    key: p,
    href: "#",
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-h2)',
      fontWeight: 300,
      lineHeight: 1.1,
      color: 'var(--ink)',
      textDecoration: 'none'
    }
  }, p)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flex: 1,
      marginLeft: 'auto',
      maxWidth: '50%'
    }
  }, /*#__PURE__*/React.createElement(MenuColumn, {
    title: "Series",
    items: series,
    swatches: true
  }), /*#__PURE__*/React.createElement(MenuColumn, {
    title: "Topics",
    items: topics
  }), /*#__PURE__*/React.createElement(MenuColumn, {
    title: "About us",
    items: pages
  }))))));
}
function MenuColumn({
  title,
  items,
  swatches = false
}) {
  if (!items?.length) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderLeft: '1px solid var(--border-strong)',
      padding: '0 32px',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    as: "h3",
    style: {
      display: 'block',
      marginBottom: 24
    }
  }, title), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, items.map(item => {
    const label = typeof item === 'string' ? item : item.label;
    const color = typeof item === 'string' ? null : item.color;
    return /*#__PURE__*/React.createElement("a", {
      key: label,
      href: "#",
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        textDecoration: 'none'
      }
    }, swatches && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 12,
        height: 12,
        flexShrink: 0,
        borderRadius: 2,
        background: color || 'var(--color-topic-neutral)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 18,
        fontWeight: 300,
        color: 'var(--ink)',
        whiteSpace: 'nowrap'
      }
    }, label));
  })));
}
Object.assign(__ds_scope, { HeaderNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/HeaderNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/PillarFilterBar.jsx
try { (() => {
/**
 * Stories/pillar filter row: pillar pills, series + tag dropdowns, result count,
 * sort select and grid/list toggle, bracketed by hairline rules.
 */
function PillarFilterBar({
  pillars = [],
  activePillar,
  onPillarChange,
  filters = ['Series', 'Topics'],
  totalCount,
  sort = 'Newest',
  viewMode = 'grid',
  onViewModeChange,
  iconBase = '../../assets/icons',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-strong)',
      borderBottom: '1px solid var(--border-strong)',
      padding: '12px 0',
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 16,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, pillars.map(p => {
    const active = p === activePillar;
    return /*#__PURE__*/React.createElement("button", {
      key: p,
      type: "button",
      onClick: () => onPillarChange?.(p),
      className: "hairline-border",
      style: {
        height: 36,
        padding: '0 12px',
        border: '1px solid',
        borderColor: active ? 'var(--ink)' : 'var(--border-strong)',
        background: active ? 'var(--ink)' : 'transparent',
        color: active ? 'var(--primary-foreground)' : 'var(--ink)',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-button)',
        textTransform: 'uppercase',
        letterSpacing: '0.02em',
        transition: 'background-color var(--duration-default), color var(--duration-default)'
      }
    }, p);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginLeft: 'auto'
    }
  }, filters.map(label => /*#__PURE__*/React.createElement("button", {
    key: label,
    type: "button",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      height: 36,
      padding: '0 8px',
      border: '1px solid var(--border)',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-button)',
      textTransform: 'uppercase',
      color: 'var(--ink)'
    }
  }, label, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "icon-plus",
    size: 12,
    basePath: iconBase
  }))), typeof totalCount === 'number' && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--ink-muted)',
      whiteSpace: 'nowrap'
    }
  }, totalCount, " results"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      color: 'var(--ink)',
      whiteSpace: 'nowrap'
    }
  }, "Sort: ", sort), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 4
    }
  }, ['grid', 'list'].map(mode => /*#__PURE__*/React.createElement("button", {
    key: mode,
    type: "button",
    "aria-label": mode + ' view',
    onClick: () => onViewModeChange?.(mode),
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 32,
      height: 32,
      border: 0,
      background: viewMode === mode ? 'var(--surface-neutral)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: 'icon-' + mode,
    size: 18,
    basePath: iconBase
  }))))));
}
Object.assign(__ds_scope, { PillarFilterBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/PillarFilterBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ArticleScreen.jsx
try { (() => {
const {
  TopicBadge,
  AuthorByline,
  DateDisplay,
  FigureCaption,
  NewsletterForm,
  EditorialNotice,
  ShareTools,
  LinkMore,
  SectionHeading
} = window.BeGiantDesignSystem_f91809;
function ArticleScreen({
  onOpenAuthor,
  onOpenArticle
}) {
  const d = window.BG_DATA;
  const a = d.article;
  return /*#__PURE__*/React.createElement("article", null, /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'relative',
      width: '100%',
      height: 620,
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Media, {
    src: a.image,
    alt: a.imageAlt,
    aspect: "auto",
    style: {
      position: 'absolute',
      inset: 0,
      aspectRatio: 'auto',
      height: '100%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--overlay-hero)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 10,
      padding: '24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      minWidth: 0,
      maxWidth: 750,
      flexDirection: 'column',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(TopicBadge, {
    title: a.topic,
    color: a.topicColor,
    isFranchise: true,
    light: true
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontSize: 56,
      fontWeight: 400,
      lineHeight: 1.1,
      letterSpacing: '-0.56px',
      color: 'var(--primary-foreground)'
    }
  }, a.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 20,
      lineHeight: 1.3,
      color: 'var(--primary-foreground)'
    }
  }, a.dek)), /*#__PURE__*/React.createElement(AuthorByline, {
    authors: a.authors,
    photoCredit: a.photoCredit,
    light: true
  })), /*#__PURE__*/React.createElement(FigureCaption, {
    caption: a.caption,
    credit: a.credit,
    light: true,
    align: "right",
    style: {
      maxWidth: 320
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "bg-container",
    style: {
      display: 'flex',
      gap: 48,
      alignItems: 'flex-start',
      padding: '32px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1,
      maxWidth: 700,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      marginBottom: 32,
      fontSize: 16
    }
  }, /*#__PURE__*/React.createElement(DateDisplay, {
    dateString: a.publishedAt
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("span", null, a.readTime, " min read"), /*#__PURE__*/React.createElement(ShareTools, {
    iconBase: "../../assets/icons"
  }))), a.body.map((p, i) => i === 3 ? /*#__PURE__*/React.createElement("blockquote", {
    key: i,
    style: {
      margin: '24px 0',
      padding: 0,
      fontFamily: 'var(--font-serif)',
      fontSize: 32,
      fontWeight: 300,
      lineHeight: 1.2,
      letterSpacing: 'var(--tracking-heading)'
    }
  }, p) : /*#__PURE__*/React.createElement("p", {
    key: i,
    className: "prose",
    style: {
      margin: '0 0 20px'
    }
  }, p)), /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: '8px 0 24px'
    }
  }, /*#__PURE__*/React.createElement(Media, {
    src: a.figure.image,
    alt: a.figure.caption,
    aspect: "3 / 2"
  }), /*#__PURE__*/React.createElement(FigureCaption, {
    caption: a.figure.caption,
    credit: a.figure.credit,
    style: {
      marginTop: 8
    }
  })), /*#__PURE__*/React.createElement(EditorialNotice, {
    kind: "correction",
    date: "August 29, 2026",
    style: {
      marginBottom: 24
    }
  }, "An earlier version of this story misstated the corridor's rated capacity."), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-strong)',
      padding: '24px 0',
      display: 'flex',
      gap: 32,
      alignItems: 'flex-start',
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: d.author.portrait,
    alt: d.author.name,
    style: {
      width: 80,
      height: 80,
      objectFit: 'cover',
      objectPosition: 'center top',
      borderRadius: '50%',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onOpenAuthor();
    },
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 24,
      letterSpacing: '-0.6px'
    }
  }, d.author.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.4,
      color: 'var(--ink)'
    }
  }, d.author.bio))), /*#__PURE__*/React.createElement(LinkMore, {
    label: "More by Luc",
    href: "#"
  }))), /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 350,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 12px',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 500,
      textTransform: 'uppercase',
      letterSpacing: '0.35px'
    }
  }, "Read More"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, d.latest.slice(0, 3).map(s => /*#__PURE__*/React.createElement("div", {
    key: s.id,
    style: {
      borderTop: '0.5px solid var(--border-strong)',
      padding: '12px 0'
    }
  }, /*#__PURE__*/React.createElement(TopicBadge, {
    title: s.topic,
    color: s.topicColor,
    isFranchise: Boolean(s.topicColor),
    style: {
      marginBottom: 10
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      fontWeight: 500,
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onOpenArticle();
    },
    style: {
      color: 'inherit'
    }
  }, s.title)), /*#__PURE__*/React.createElement(AuthorByline, {
    authors: s.authors,
    dateString: s.publishedAt,
    prefix: "",
    style: {
      fontSize: 12,
      marginTop: 10,
      color: 'var(--ink-muted)'
    }
  }))))), /*#__PURE__*/React.createElement(NewsletterForm, {
    heading: "Giant stories",
    body: "Weekly, from the newsroom.",
    illustrationSrc: "../../assets/illustrations/BG-Illo-Newsletter_Mailbox.svg"
  })))), /*#__PURE__*/React.createElement("section", {
    className: "bg-container",
    style: {
      padding: '0 24px 64px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    moreLabel: "See all",
    moreHref: "#"
  }, "Related stories"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 32,
      marginTop: 24
    }
  }, d.grid.slice(0, 3).map(s => /*#__PURE__*/React.createElement("article", {
    key: s.id,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Media, {
    src: s.image,
    alt: s.imageAlt,
    position: s.position
  }), /*#__PURE__*/React.createElement(TopicBadge, {
    title: s.topic,
    color: s.topicColor,
    isFranchise: Boolean(s.topicColor)
  }), /*#__PURE__*/React.createElement("h3", {
    className: "heading-article",
    style: {
      margin: 0
    }
  }, s.title), /*#__PURE__*/React.createElement(AuthorByline, {
    authors: s.authors,
    dateString: s.publishedAt,
    prefix: "",
    style: {
      fontSize: 12,
      color: 'var(--ink-muted)'
    }
  }))))));
}
Object.assign(window, {
  ArticleScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ArticleScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/AuthorScreen.jsx
try { (() => {
const {
  TopicBadge,
  AuthorByline,
  Breadcrumb,
  LinkMore
} = window.BeGiantDesignSystem_f91809;
function AuthorScreen({
  onOpenArticle
}) {
  const d = window.BG_DATA;
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-container",
    style: {
      padding: '0 24px 64px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 0 24px'
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Authors',
      href: '#'
    }, {
      label: d.author.name
    }]
  })), /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      gap: 40,
      alignItems: 'flex-end',
      borderBottom: '1px solid var(--border-strong)',
      paddingBottom: 32
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: d.author.portrait,
    alt: d.author.name,
    style: {
      width: 220,
      height: 260,
      objectFit: 'cover',
      objectPosition: 'center top',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-eyebrow"
  }, d.author.role), /*#__PURE__*/React.createElement("h1", {
    className: "heading-display-xl",
    style: {
      margin: 0
    }
  }, d.author.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: 640,
      fontSize: 18,
      lineHeight: 1.4
    }
  }, d.author.bio))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '32px 0 16px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "heading-section",
    style: {
      margin: 0
    }
  }, "Stories by ", d.author.name.split(' ')[0]), /*#__PURE__*/React.createElement(LinkMore, {
    label: "RSS",
    href: "#"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, d.more.concat(d.grid).slice(0, 6).map(a => /*#__PURE__*/React.createElement("div", {
    key: a.id,
    style: {
      borderTop: '1px solid var(--border-strong)',
      padding: '20px 0',
      display: 'flex',
      gap: 20,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 138,
      height: 138,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Media, {
    src: a.image,
    alt: a.imageAlt,
    aspect: "1",
    position: a.position
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(TopicBadge, {
    title: a.topic,
    color: a.topicColor,
    isFranchise: Boolean(a.topicColor)
  }), /*#__PURE__*/React.createElement("h3", {
    className: "heading-article-lg",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onOpenArticle();
    },
    style: {
      color: 'inherit'
    }
  }, a.title)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.4
    }
  }, a.dek), /*#__PURE__*/React.createElement(AuthorByline, {
    authors: a.authors,
    dateString: a.publishedAt,
    prefix: "",
    style: {
      fontSize: 12,
      color: 'var(--ink-muted)'
    }
  }))))));
}
Object.assign(window, {
  AuthorScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/AuthorScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Homepage.jsx
try { (() => {
const {
  ArticleCard,
  ArticleCardSmall,
  RailCard,
  TopicBadge,
  AuthorByline,
  SectionHeading,
  LinkMore,
  Eyebrow,
  NewsletterForm,
  ButtonUtilityOutline,
  FigureCaption
} = window.BeGiantDesignSystem_f91809;
function SplitHero({
  article,
  latest,
  onOpen
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    className: "bg-container",
    style: {
      padding: '32px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 24,
      gridTemplateColumns: 'minmax(0,3fr) minmax(0,1fr)'
    }
  }, /*#__PURE__*/React.createElement("article", {
    style: {
      display: 'flex',
      minWidth: 0,
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onOpen();
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, /*#__PURE__*/React.createElement(Media, {
    src: article.image,
    alt: article.imageAlt,
    aspect: "16 / 9",
    hover: hover
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      maxWidth: '90%'
    }
  }, /*#__PURE__*/React.createElement(TopicBadge, {
    title: article.topic
  }), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-h1)',
      fontWeight: 300,
      lineHeight: 1.1,
      letterSpacing: 'var(--tracking-heading)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onOpen();
    },
    style: {
      color: 'inherit'
    }
  }, article.title)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.4
    }
  }, article.dek), /*#__PURE__*/React.createElement(AuthorByline, {
    authors: article.authors,
    dateString: article.publishedAt,
    photoCredit: article.photoCredit,
    readTime: article.readTime
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      minWidth: 0,
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-h6)',
      fontWeight: 600,
      textTransform: 'uppercase',
      lineHeight: 1
    }
  }, "Latest"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, latest.map(a => /*#__PURE__*/React.createElement("article", {
    key: a.id,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      borderTop: '1px solid var(--border-strong)',
      padding: '16px 0'
    }
  }, /*#__PURE__*/React.createElement(Media, {
    src: a.image,
    alt: a.imageAlt,
    aspect: "600 / 350",
    position: a.position
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-h5)',
      fontWeight: 400,
      lineHeight: 1.2
    }
  }, a.title), /*#__PURE__*/React.createElement(AuthorByline, {
    authors: a.authors,
    dateString: a.publishedAt,
    prefix: "",
    style: {
      fontSize: 12,
      color: 'var(--ink-muted)'
    }
  })))))));
}
function FeaturedFullBleed({
  article
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      width: '100%',
      overflow: 'hidden',
      height: 560
    }
  }, /*#__PURE__*/React.createElement(Media, {
    src: article.image,
    alt: article.imageAlt,
    aspect: "auto",
    style: {
      position: 'absolute',
      inset: 0,
      aspectRatio: 'auto',
      height: '100%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 10,
      padding: '24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-container"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-cream)',
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      width: 558
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      textTransform: 'uppercase',
      letterSpacing: '-0.14px'
    }
  }, article.label), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontSize: 'var(--text-h2)',
      fontWeight: 300,
      lineHeight: 1.2,
      letterSpacing: '-0.8px'
    }
  }, article.title), /*#__PURE__*/React.createElement(AuthorByline, {
    authors: article.authors,
    dateString: article.publishedAt,
    style: {
      fontSize: 12
    }
  })))));
}
function PillarsSection({
  pillars,
  grid
}) {
  const [active, setActive] = React.useState(null);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '64px 0',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-container",
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      textTransform: 'uppercase',
      letterSpacing: '-0.14px',
      marginBottom: 12
    }
  }, "Our pillars"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 20px',
      fontFamily: 'var(--font-serif)',
      fontSize: 48,
      fontWeight: 300,
      lineHeight: 1.3,
      letterSpacing: '-0.49px',
      textAlign: 'center',
      maxWidth: 917
    }
  }, pillars.map((p, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: p
  }, i > 0 && (i === pillars.length - 1 ? ' & ' : ', '), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onMouseEnter: () => setActive(p),
    onMouseLeave: () => setActive(null),
    style: {
      color: 'inherit',
      textDecoration: 'underline',
      textDecorationThickness: 1,
      textUnderlineOffset: 2
    }
  }, p))), ' driving Canada forward.')), /*#__PURE__*/React.createElement("div", {
    className: "bg-container",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      gap: 12,
      minHeight: 160
    }
  }, grid.slice(0, 12).map((a, i) => {
    const on = active && a.topic === active;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        flexShrink: 0,
        width: on ? 160 : 80,
        height: on ? 160 : 80,
        overflow: 'hidden',
        transition: 'all var(--duration-pillar) var(--ease-expo-out)'
      }
    }, /*#__PURE__*/React.createElement(Media, {
      src: a.image,
      alt: "",
      aspect: "1",
      position: a.position
    }));
  })));
}
function Homepage({
  onOpenArticle,
  onOpenStories
}) {
  const d = window.BG_DATA;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SplitHero, {
    article: d.hero,
    latest: d.latest,
    onOpen: onOpenArticle
  }), /*#__PURE__*/React.createElement(FeaturedFullBleed, {
    article: d.featured
  }), /*#__PURE__*/React.createElement(PillarsSection, {
    pillars: d.pillars,
    grid: d.grid.concat(d.more)
  }), /*#__PURE__*/React.createElement("section", {
    className: "bg-container",
    style: {
      padding: '0 24px 48px'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    moreLabel: "See all",
    moreHref: "#"
  }, "Recent"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 32,
      marginTop: 24
    }
  }, d.grid.map(a => /*#__PURE__*/React.createElement("article", {
    key: a.id,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onOpenArticle();
    }
  }, /*#__PURE__*/React.createElement(Media, {
    src: a.image,
    alt: a.imageAlt,
    position: a.position
  })), /*#__PURE__*/React.createElement(TopicBadge, {
    title: a.topic,
    color: a.topicColor,
    isFranchise: Boolean(a.topicColor)
  }), /*#__PURE__*/React.createElement("h3", {
    className: "heading-article",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onOpenArticle();
    },
    style: {
      color: 'inherit'
    }
  }, a.title)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.4
    }
  }, a.dek), /*#__PURE__*/React.createElement(AuthorByline, {
    authors: a.authors,
    dateString: a.publishedAt,
    prefix: "",
    style: {
      fontSize: 12,
      color: 'var(--ink-muted)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(ButtonUtilityOutline, {
    onClick: onOpenStories
  }, "All stories"))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-cream)',
      padding: '80px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-container",
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 576,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement(NewsletterForm, {
    heading: "Giant stories",
    body: "Canada's most ambitious ideas, boldest breakthroughs and greatest opportunities \u2014 weekly.",
    illustrationSrc: "../../assets/illustrations/BG-Illo-Newsletter_Mailbox.svg",
    style: {
      background: 'transparent'
    }
  })))));
}
Object.assign(window, {
  Homepage,
  SplitHero,
  FeaturedFullBleed,
  PillarsSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Homepage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Media.jsx
try { (() => {
// Image slot for the kit. Real Be Giant photography lives in assets/imagery;
// crops are driven by aspect + objectPosition, exactly as the app drives them
// from a Sanity hotspot. Falls back to a tonal brand block when src is absent.
const MEDIA_TONES = {
  beige: '#EDE7DA',
  cream: '#FAF7F0',
  ink: '#171717',
  neutral: '#F2F2F2'
};
function Media({
  src,
  alt = '',
  aspect = '16 / 9',
  hover = false,
  position = 'center',
  tone = 'beige',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: aspect,
      width: '100%',
      overflow: 'hidden',
      background: MEDIA_TONES[tone] || MEDIA_TONES.beige,
      ...style
    }
  }, src && /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: position,
      display: 'block',
      transform: hover ? 'scale(var(--media-hover-scale))' : 'none',
      transition: 'transform var(--duration-media) ease'
    }
  }));
}
Object.assign(window, {
  Media,
  MEDIA_TONES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Media.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/StoriesIndex.jsx
try { (() => {
const {
  Breadcrumb,
  PillarFilterBar,
  TopicBadge,
  AuthorByline,
  ArticleCardSmall
} = window.BeGiantDesignSystem_f91809;
function StoriesIndex({
  onOpenArticle
}) {
  const d = window.BG_DATA;
  const [pillar, setPillar] = React.useState('All');
  const [mode, setMode] = React.useState('grid');
  const all = d.grid.concat(d.more, d.latest);
  const shown = pillar === 'All' ? all : all.filter(a => a.topic === pillar);
  return /*#__PURE__*/React.createElement("div", {
    className: "bg-container",
    style: {
      padding: '0 24px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '32px 0 24px'
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Stories'
    }]
  })), /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      maxWidth: 672
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-serif)',
      fontSize: 80,
      fontWeight: 400,
      lineHeight: 1.1,
      letterSpacing: '-0.8px'
    }
  }, "Stories"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 18,
      lineHeight: 1.4,
      paddingBottom: 16
    }
  }, "Reporting on the people, places, ideas and breakthroughs shaping Canada's future.")), /*#__PURE__*/React.createElement(PillarFilterBar, {
    pillars: ['All'].concat(d.pillars),
    activePillar: pillar,
    onPillarChange: setPillar,
    totalCount: shown.length,
    viewMode: mode,
    onViewModeChange: setMode,
    iconBase: "../../assets/icons"
  }), mode === 'grid' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 32,
      paddingTop: 24
    }
  }, shown.map(a => /*#__PURE__*/React.createElement("article", {
    key: a.id,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onOpenArticle();
    }
  }, /*#__PURE__*/React.createElement(Media, {
    src: a.image,
    alt: a.imageAlt,
    position: a.position
  })), /*#__PURE__*/React.createElement(TopicBadge, {
    title: a.topic,
    color: a.topicColor,
    isFranchise: Boolean(a.topicColor)
  }), /*#__PURE__*/React.createElement("h3", {
    className: "heading-article",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onOpenArticle();
    },
    style: {
      color: 'inherit'
    }
  }, a.title)), /*#__PURE__*/React.createElement(AuthorByline, {
    authors: a.authors,
    dateString: a.publishedAt,
    prefix: "",
    style: {
      fontSize: 12,
      color: 'var(--ink-muted)'
    }
  })))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      paddingTop: 8
    }
  }, shown.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.id,
    style: {
      borderBottom: '1px solid var(--border-strong)',
      padding: '16px 0',
      display: 'flex',
      gap: 16,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 120,
      height: 120,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Media, {
    src: a.image,
    alt: a.imageAlt,
    aspect: "1",
    position: a.position
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(TopicBadge, {
    title: a.topic,
    color: a.topicColor,
    isFranchise: Boolean(a.topicColor)
  }), /*#__PURE__*/React.createElement("h3", {
    className: "heading-article-lg",
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onOpenArticle();
    },
    style: {
      color: 'inherit'
    }
  }, a.title)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 16,
      lineHeight: 1.4
    }
  }, a.dek), /*#__PURE__*/React.createElement(AuthorByline, {
    authors: a.authors,
    dateString: a.publishedAt,
    prefix: "",
    style: {
      fontSize: 12,
      color: 'var(--ink-muted)'
    }
  }))))));
}
Object.assign(window, {
  StoriesIndex
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/StoriesIndex.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
// Sample content standing in for Sanity documents. Copy shape mirrors the real
// CMS: pillar + topic, headline, dek, authors, publishedAt, readTime, hero image.
// Photography supplied by Be Giant; captions describe the actual frames.
const IMG = '../../assets/imagery/';
window.BG_DATA = {
  pillars: ['People', 'Places', 'Ideas'],
  series: [{
    label: 'Future',
    color: 'var(--color-series-future)'
  }, {
    label: 'Hear Me Out',
    color: 'var(--color-series-hearmeout)'
  }, {
    label: 'Solve',
    color: 'var(--color-series-solve)'
  }, {
    label: 'The Exchange',
    color: 'var(--color-series-exchange)'
  }, {
    label: 'Habitats',
    color: 'var(--color-series-habitats)'
  }, {
    label: 'Brain Gains',
    color: 'var(--color-series-braingains)'
  }],
  topics: ['Climate', 'Housing', 'Health', 'Energy', 'Immigration', 'Manufacturing'],
  pages: ['About us', 'Our team', 'Contact', 'Newsletters', 'Support us'],
  hero: {
    id: 'hero',
    title: 'P.E.I. built the solar farm. Now it needs the wire.',
    dek: "Summerside's 80-acre array proved the island could generate its own power. Getting it anywhere else is the hard part.",
    topic: 'Places',
    authors: [{
      name: 'Luc Rinaldi',
      href: '#'
    }],
    publishedAt: '2026-08-28',
    readTime: 14,
    image: IMG + 'summerside-solar.jpg',
    imageAlt: "The sun sets over rows of solar panels at Summerside, P.E.I.'s 80-acre array.",
    photoCredit: 'Chantal Bennett'
  },
  latest: [{
    id: 'l1',
    title: 'The Battery holds',
    dek: "St. John's oldest neighbourhood has survived four storms in six years. Its residents are done being a metaphor.",
    topic: 'Places',
    authors: [{
      name: 'Kelsey Rolfe'
    }],
    publishedAt: '2026-08-27',
    image: IMG + 'battery-st-johns.jpg',
    imageAlt: "The historic Battery neighbourhood in St. John's, Newfoundland."
  }, {
    id: 'l2',
    title: 'Hear me out: kill the pilot project',
    dek: 'Canada is very good at three-year experiments and very bad at year four.',
    topic: 'Hear Me Out',
    topicColor: 'var(--color-magenta)',
    authors: [{
      name: 'Mathew Ingram'
    }],
    publishedAt: '2026-08-26',
    image: IMG + 'trump-carney-collage.jpg',
    imageAlt: 'A collage-style photo illustration of Donald Trump and Mark Carney.'
  }, {
    id: 'l3',
    title: 'Six buses, one grid, zero spare parts',
    dek: 'What electrifying a rural school fleet actually costs after year one.',
    topic: 'Solve',
    topicColor: 'var(--color-yellow)',
    authors: [{
      name: 'Deborah Aarts'
    }],
    publishedAt: '2026-08-25',
    image: IMG + 'school-bus-collage.jpg',
    imageAlt: 'Photo illustration of a yellow school bus with black electrical cables.'
  }, {
    id: 'l4',
    title: 'The rover that makes mine waste breathe',
    dek: 'A Vancouver startup is teaching tailings piles to absorb carbon dioxide.',
    topic: 'Ideas',
    authors: [{
      name: 'Rebecca Gao'
    }],
    publishedAt: '2026-08-24',
    image: IMG + 'mine-waste-rover.jpg',
    imageAlt: "A rover crossing a tailings pile it helps 'inhale' carbon dioxide."
  }],
  featured: {
    id: 'f1',
    label: 'The Exchange',
    title: 'The man measuring how fast the coast disappears',
    dek: 'Camilo Botero has 40 years of erosion data and one uncomfortable conclusion.',
    authors: [{
      name: 'Jennifer Wells'
    }],
    publishedAt: '2026-08-21',
    image: IMG + 'coastal-geographer-erosion.jpg',
    imageAlt: 'Coastal geographer Camilo Botero measures erosion levels with a handheld device.'
  },
  grid: [{
    id: 'g1',
    title: 'The imaging device that wants to end the second surgery',
    dek: "Perimeter's scanner reads tissue samples while the patient is still on the table.",
    topic: 'Brain Gains',
    topicColor: 'var(--color-purple)',
    authors: [{
      name: 'Rebecca Gao'
    }],
    publishedAt: '2026-08-20',
    image: IMG + 'perimeter-imaging-device.jpg',
    imageAlt: "Claire, Perimeter's imaging device."
  }, {
    id: 'g2',
    title: 'A church becomes 40 apartments',
    dek: 'The Lutheran Church of the Cross west of downtown Winnipeg is being converted — slowly, legally, and at last.',
    topic: 'Habitats',
    topicColor: 'var(--color-violet)',
    authors: [{
      name: 'Stefan Novakovic'
    }],
    publishedAt: '2026-08-18',
    image: IMG + 'lutheran-church-winnipeg.jpg',
    imageAlt: 'The Lutheran Church of the Cross, west of downtown Winnipeg.'
  }, {
    id: 'g3',
    title: 'Saskatchewan lost its tornadoes',
    dek: 'The province once saw more twisters than any other. The storms moved east, and nobody told the warning system.',
    topic: 'Places',
    authors: [{
      name: 'Bojan Furst'
    }],
    publishedAt: '2026-08-15',
    image: IMG + 'saskatchewan-twisters.jpg',
    imageAlt: 'A storm front over open Saskatchewan prairie.'
  }, {
    id: 'g4',
    title: 'Waiting for the scan that never came',
    dek: 'Talampassi opted for a double mastectomy rather than face another year on a list.',
    topic: 'People',
    authors: [{
      name: 'Sadiya Ansari'
    }],
    publishedAt: '2026-08-13',
    image: IMG + 'talampassi-portrait.jpg',
    imageAlt: 'Portrait of Talampassi at home.',
    position: 'center top'
  }, {
    id: 'g5',
    title: 'The mathematician who checks the machines',
    dek: "Daniel Litt spends his evenings proving where AI's proofs go wrong.",
    topic: 'Ideas',
    authors: [{
      name: 'Andrew Phillips'
    }],
    publishedAt: '2026-08-11',
    image: IMG + 'daniel-litt-mathematician.jpg',
    imageAlt: 'Toronto-based mathematician Daniel Litt.'
  }, {
    id: 'g6',
    title: 'A 78 mph fastball, and other Canadian advantages',
    dek: "Tyler Rogers throws slower than anyone in the majors. It's working.",
    topic: 'People',
    authors: [{
      name: 'Tim Harper'
    }],
    publishedAt: '2026-08-08',
    image: IMG + 'tyler-rogers-jays.jpg',
    imageAlt: 'Toronto Blue Jays relief pitcher Tyler Rogers.'
  }],
  more: [{
    id: 'm1',
    title: 'The researcher who left',
    dek: 'Why a renowned American scientist moved her lab north this spring.',
    topic: 'Brain Gains',
    topicColor: 'var(--color-purple)',
    authors: [{
      name: 'Tina Knezevic'
    }],
    publishedAt: '2026-08-06',
    image: IMG + 'researcher-leaving-us.jpg',
    imageAlt: 'A researcher in her new Canadian laboratory.'
  }, {
    id: 'm2',
    title: 'Where the telephone was almost invented',
    dek: 'A plaque in Paris, Ontario, and the long Canadian habit of near-misses.',
    topic: 'Ideas',
    authors: [{
      name: 'Tom Jokinen'
    }],
    publishedAt: '2026-08-04',
    image: IMG + 'paris-ontario-plaque.jpg',
    imageAlt: 'Detail of a plaque in Paris, Ontario.'
  }, {
    id: 'm3',
    title: 'Stonewall, under water again',
    dek: 'The town north of Winnipeg has flooded three times since 2019.',
    topic: 'Places',
    authors: [{
      name: 'Doug Horner'
    }],
    publishedAt: '2026-08-01',
    image: IMG + 'stonewall-flooding.jpg',
    imageAlt: 'Flooding in Stonewall, Manitoba, June 2026.'
  }, {
    id: 'm4',
    title: 'The simulation centre that trains the whole island',
    dek: 'Inside the UPEI medical school lab standing in for every emergency room in P.E.I.',
    topic: 'Solve',
    topicColor: 'var(--color-yellow)',
    authors: [{
      name: 'Tammie Muise'
    }],
    publishedAt: '2026-07-29',
    image: IMG + 'upei-simulation-centre.jpg',
    imageAlt: 'A demonstration at the UPEI medical school simulation centre.'
  }, {
    id: 'm5',
    title: 'The founder who built a synthetic Canada',
    dek: 'Thirty-eight million simulated people, and the policy questions they answer.',
    topic: 'Ideas',
    authors: [{
      name: 'Mathew Ingram'
    }],
    publishedAt: '2026-07-25',
    image: IMG + 'synthetic-population.gif',
    imageAlt: "The Toronto founder who built a 'synthetic' Canadian population.",
    position: 'center top'
  }, {
    id: 'm7',
    title: 'The chemist turning restaurant grease into biosurfactant',
    dek: 'Nivatha Balendra founded Dispersa in a university lab. It now supplies three continents.',
    topic: 'People',
    authors: [{
      name: 'Rebecca Gao'
    }],
    publishedAt: '2026-07-24',
    image: IMG + 'nivatha-balendra-dispersa.jpg',
    imageAlt: 'Nivatha Balendra, founder and CEO of Dispersa, outside her lab.',
    position: 'center top'
  }, {
    id: 'm6',
    title: 'What Kevin Smith learned running the largest hospital network in the country',
    dek: 'Eight years, one pandemic, and a capital plan that outlived three governments.',
    topic: 'People',
    authors: [{
      name: 'Jennifer Wells'
    }],
    publishedAt: '2026-07-22',
    image: IMG + 'kevin-smith-uhn.jpg',
    imageAlt: 'Kevin Smith, president and CEO of University Health Network.',
    position: 'center top'
  }],
  article: {
    title: 'P.E.I. built the solar farm. Now it needs the wire.',
    dek: "Summerside's 80-acre array proved the island could generate its own power. Getting it anywhere else is the hard part.",
    topic: 'Places',
    authors: [{
      name: 'Luc Rinaldi',
      href: '#'
    }],
    publishedAt: '2026-08-28',
    readTime: 14,
    photoCredit: 'Chantal Bennett',
    image: IMG + 'summerside-solar.jpg',
    imageAlt: "The sun sets over rows of solar panels at Summerside, P.E.I.'s 80-acre array.",
    caption: "Summerside's 80-acre array at sunset. The island generates more than it can move.",
    credit: '(Photo by Chantal Bennett)',
    figure: {
      image: IMG + 'toronto-wildfire-smoke.jpg',
      caption: 'The skies above Toronto on July 15, 2026. Peak-demand records now arrive with the smoke.',
      credit: '(Photo by Chantal Bennett)'
    },
    body: ['The grid was built for a country that no longer exists. Between 1955 and 1985, Canada strung high-voltage line across the Shield on the assumption that power would flow one way: out of a handful of enormous dams, into a handful of enormous factories.', 'That assumption held for forty years. It stopped holding sometime around 2019, and almost nobody outside the utilities noticed.', 'Rebuilding it means arguing, province by province, about who pays — and the argument has a deadline. Interprovincial transmission is the only piece of the energy transition that cannot be built quickly once the need is obvious.', '\u201cWe are not short of electrons,\u201d says one planner who has spent a decade on interties. \u201cWe are short of wire, and short of the patience to permit it.\u201d', 'What follows is a map of the eleven projects that decide whether the next decade works.']
  },
  author: {
    name: 'Luc Rinaldi',
    role: 'Senior correspondent, Places',
    bio: 'Luc Rinaldi writes about infrastructure, energy and the slow machinery of Canadian construction. He has reported from every province and two territories, and is still waiting on one access-to-information request from 2021.',
    // Staff headshots were not supplied, so this uses the app's real fallback:
    // one of the four brand gradient SVGs AuthorImage.tsx renders in their place.
    portrait: '../../assets/gradients/red-to-orange-btt.svg'
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ButtonUtilityOutline = __ds_scope.ButtonUtilityOutline;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CardHeader = __ds_scope.CardHeader;

__ds_ns.CardTitle = __ds_scope.CardTitle;

__ds_ns.CardDescription = __ds_scope.CardDescription;

__ds_ns.CardContent = __ds_scope.CardContent;

__ds_ns.CardFooter = __ds_scope.CardFooter;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Separator = __ds_scope.Separator;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.ArticleCard = __ds_scope.ArticleCard;

__ds_ns.ArticleCardSmall = __ds_scope.ArticleCardSmall;

__ds_ns.AuthorByline = __ds_scope.AuthorByline;

__ds_ns.DateDisplay = __ds_scope.DateDisplay;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.FigureCaption = __ds_scope.FigureCaption;

__ds_ns.CircledArrow = __ds_scope.CircledArrow;

__ds_ns.LinkMore = __ds_scope.LinkMore;

__ds_ns.RailCard = __ds_scope.RailCard;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.TopicBadge = __ds_scope.TopicBadge;

__ds_ns.EditorialNotice = __ds_scope.EditorialNotice;

__ds_ns.ShareTools = __ds_scope.ShareTools;

__ds_ns.NewsletterForm = __ds_scope.NewsletterForm;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.HeaderNav = __ds_scope.HeaderNav;

__ds_ns.PillarFilterBar = __ds_scope.PillarFilterBar;

})();
