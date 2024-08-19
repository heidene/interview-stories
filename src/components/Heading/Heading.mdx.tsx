type headingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
} & astroHTML.JSX.HTMLAttributes;

export const Heading = ({ as: Element = "h1", id, children }: headingProps) => {
  const css = `
    .heading {
      margin-block-start: calc(var(--global-space)* 5);
      margin-block-end: 0;
      padding: 0;
      scroll-margin-top: var(--global-scroll-margin-top);
    }

    .heading-line {
      margin-block-start: .5rem;
      margin-block-end: calc(var(--global-space)* 4);

    }

    .heading--h1 {
      color: var(--primary-color);
    }
  `;
  return (
    <>
      <style>{css}</style>
      <Element
        id={id === null ? undefined : id}
        class={`heading heading--${Element}`}
      >
        {children}
      </Element>
      <hr class="heading-line" />
    </>
  );
};

export const H1 = (props: astroHTML.JSX.HTMLAttributes) => (
  <Heading as="h1" id={props.id}>
    {props.children}
  </Heading>
);
export const H2 = (props: astroHTML.JSX.HTMLAttributes) => (
  <Heading as="h2" id={props.id}>
    {props.children}
  </Heading>
);
export const H3 = (props: astroHTML.JSX.HTMLAttributes) => (
  <Heading as="h3" id={props.id}>
    {props.children}
  </Heading>
);
export const H4 = (props: astroHTML.JSX.HTMLAttributes) => (
  <Heading as="h4" id={props.id}>
    {props.children}
  </Heading>
);
export const H5 = (props: astroHTML.JSX.HTMLAttributes) => (
  <Heading as="h5" id={props.id}>
    {props.children}
  </Heading>
);
export const H6 = (props: astroHTML.JSX.HTMLAttributes) => (
  <Heading as="h6" id={props.id}>
    {props.children}
  </Heading>
);
