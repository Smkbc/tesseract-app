import React, { Fragment } from "react";
import { Container } from "react-bootstrap";
import { IPageProps } from "./page.organism.types";
import { classes } from "../../../shared/utils/styles.util";
import styles from "./page.organism.module.scss";
import Header from "../Header/header.organism";
import Footer from "../Footer/footer.organism";

const PageOrganism: React.FC<IPageProps> = (props) => {

  const {
    containerEnabled,
    children,
    className,
    headerType,
    disableFooter,
    disableHeader,
    ...otherProps
  } = props;

  return (
    <Fragment>
      {!disableHeader && <Header type={headerType}/>}
      <Container
        {...otherProps}
        className={classes(styles.page, props.className)}
      >
        {children}
      </Container>
      {!disableFooter && <Footer/>}
    </Fragment>
  );
};

export default PageOrganism;
