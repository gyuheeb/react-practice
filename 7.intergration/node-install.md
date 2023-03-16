01. Node.js
## yum 설치
   ```bash

  # curl -sL https://rpm.nodesource.com/setup_18.x | sudo -E bash -
  # yum install -y nodejs
  ```

## 컴파일 설치
 특정 버젼의 Node 애플리케이션만 운용하는 서버 환경이라면 특정 버젼의 Node만 소스 컴파일 설치하고 애플리케이션을 운용하면 베스트 일 것이다. Linux(CentOS) 에서 Node를 소스 컴파일 설치를 한다. 설치를 위해서는 Python3(정확히, 공유 라이브러리)가 설치되어 있어야 한다. [Python3 리눅스 설치 및 설정]을 참고해서 설치한다. 그리고 V8 엔진 컴파일을 위해 g++ 7.x 버젼이 필요하다. CentOS RPM 설치는 4.x까지 지원하기 때문에 별도 설치 및 설정을 해 주어야 한다.

1.	g++ 7.x 설치 및 설치

    ```bash
    # g++ --version
    g++ (GCC) 4.8.5 20150623 (Red Hat 4.8.5-39)
    Copyright (C) 2015 Free Software Foundation, Inc.
    
    # yum install centos-release-scl
    # yum install devtoolset-7-gcc*
    # scl enable devtoolset-7 bash
    # g++ --version
    Thread model: posix
    gcc version 7.3.1 20180303 (Red Hat 7.3.1-5) (GCC)
    
    ```

2.	설치
    v18.14.1을 설치하고 설치 위치는 /usr/local/douzone2023/node-v18.14.1 이다.

    ```bash
    # wget https://nodejs.org/dist/v18.14.1/node-v18.14.1.tar.gz
    # tar xvfz node-v18.14.1.tar.gz
    # ./configure --prefix=/usr/local/douzone2023/node-v18.14.1
    # make & make install
    ```

3.	링크 작업

    ```bash
    # ln -s /usr/local/douzone2023/node-v18.14.1 /usr/local/douzone2023/node
    ```

4.	PATH 설정 (/etc/profile)

    ```
    # node 
    export PATH=$PATH:/usr/local/douzone2023/node/bin
    ```

5.	설정 적용 및 설치 확인

    ```bash
    # source /etc/profile
    # node --version
    v18.14.1
    ```