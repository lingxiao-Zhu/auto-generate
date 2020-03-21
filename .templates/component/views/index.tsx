import React, { PureComponent } from "react";
import styles from "../assets/index.m.scss";

interface IState {}

interface IProps {}

class Index extends PureComponent<IProps, Readonly<IState>> {
  state: IState = {};

  componentDidMount(): void {}

  componentWillUnmount(): void {}

  render(): JSX.Element {
    return <div className={styles.container}></div>;
  }
}

export default Index;
