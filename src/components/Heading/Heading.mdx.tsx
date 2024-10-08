type headingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
} & React.HTMLAttributes<HTMLElement>;

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
        className={`heading heading--${Element}`}
      >
        {children}
      </Element>
      <hr className="heading-line" />
    </>
  );
};

export const H1 = (props: React.HTMLAttributes<HTMLElement>) => (
  <Heading as="h1" id={props.id}>
    {props.children}
  </Heading>
);
export const H2 = (props: React.HTMLAttributes<HTMLElement>) => (
  <Heading as="h2" id={props.id}>
    {props.children}
  </Heading>
);
export const H3 = (props: React.HTMLAttributes<HTMLElement>) => (
  <Heading as="h3" id={props.id}>
    {props.children}
  </Heading>
);
export const H4 = (props: React.HTMLAttributes<HTMLElement>) => (
  <Heading as="h4" id={props.id}>
    {props.children}
  </Heading>
);
export const H5 = (props: React.HTMLAttributes<HTMLElement>) => (
  <Heading as="h5" id={props.id}>
    {props.children}
  </Heading>
);
export const H6 = (props: React.HTMLAttributes<HTMLElement>) => (
  <Heading as="h6" id={props.id}>
    {props.children}
  </Heading>
);
