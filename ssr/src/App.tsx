/*
 * @Author: ye.chen
 * @Date: 2020-05-02 00:00:11
 * @Last Modified by: ye.chen
 * @Last Modified time: 2020-05-02 00:31:53
 */
import React from 'react';
import { Layout } from 'antd';
import logo from '@/assets/logo.png';
import styles from './App.less';

const { title, repo } = INITIAL_SITE_INFO;
const { Header, Footer, Content } = Layout;

export default function () {
  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>{title}</Header>
      <Content className={styles.content}>
        <img src={logo} />
        <div>
          <span>Code in here</span>
          <code>./App.tsx</code>
        </div>
        <div>
          <span>感谢支持，希望 start 支持一下～</span>
          <a href={repo} target="_blank">
            {repo}
          </a>
        </div>
      </Content>
      <Footer className={styles.footer}>© 2020 Coyeah_chen@outlook.com</Footer>
    </Layout>
  );
}
