02. Python

## Installation

### Mac

 주로 개발 환경이 될 것이다. Python3와 Virtual Environments 구성으로 파이썬 개발환경을 구성하는 것이 베스트이다. 맥에는 Python2.7이 이미 설치되어 있지만 공식 파이썬과 완전 다르며 맥 전용 라이브러리도 포함되어 있다. 공식 Python2.7과 호환에 문제가 있다. 따라서 Python2.7 또는 Pythom 3.x 설치해 개발할 때에는 정식 배포판 설치를 추천한다. Homebrew를 사용하면 쉽게 설치할 수 있다.

1.	3.x 설치

	```sh
	brew install python3
	python3 --version

	Python 3.8.5
	```
	
	기본 설치 위치는 /usr/local/Cellar/python3 이다.


2.	2.x 설치

	```sh
	brew install python

	```
	 
	기본 설치 위치는 /usr/local/Cellar/python 이다.


3.	pip3(Python3) 업그레이드
	
	```sh
	pip3 install --upgrade pip
	
	Requirement already up-to-date: pip in /usr/local/lib/python3.8/site-packages (20.1.1)
	
	```
	python3과 함께 설치되는 파이썬 패키지 설치 및 관리 도구인 pip 업그레이드 한다.


### Linux(CentOS)
 주로 배포된 파이썬 애플리케이션의 실행환경을 구축한다. CentOS에는 yum(Yellow dog Updater, Modified)이라는 RPM 기반의 레드햇 패키지 설치/업데이트/제거 도구가 있는데 Python 2.X로 작성되어 있다. 따라서 CentOS에는 Python2.x가 이미 설치되어 있다. Python2.x를 제거하고 Python3를 새로 설치하면 Python2.x와 Python3.x는 호환되지 않기 때문에 yum이 작동되지 않는다. 이는 CenOS 서버 운용에 문제를 발생시킬 수 있기 때문에 보통 CenOS에서는 Python3.x를 따로 설치한다. python로 Python3를 실행하고 싶겠지만, 이 시도도 yum 실행에 문제를 발생시킨다. Python3 실행은 python3로 하는 것이 보통이다.

1.	의존성 라이브러리 설치 및 설정

	```sh
	yum install -y openssl
	yum install -y openssl-devel
	yum install -y bzip2-devel
	yum install -y sqlite-devel
	yum install -y zlib-devel
	yum install -y libffi-devel
	
	```
	yum을 사용하여 다음 라이브러리를 차례로 설치한다.

2.	libressl 설치

	-	소스 컴파일 및 설치

		```sh
		wget https://ftp.openbsd.org/pub/OpenBSD/LibreSSL/libressl-2.9.2.tar.gz
		tar xvfz libressl-2.9.2.tar.gz 
		cd libressl-2.9.2
		
		./configure --prefix=/usr/local/ssl
		make
		make install
		```

	-	공유 라이브러리 캐시 설정(/etc/ld.so.conf.d/ssl.conf)

		```sh
		vi /etc/ld.so.conf.d/ssl.conf
		```

	-	ssl.conf 내용

		```sh
		/usr/local/ssl/lib
		```

	-	ldconfig 실행 및 확인

		```bash
		ldconfig -v | grep ssl
		
		/usr/local/ssl/lib:
			libssl.so.47 -> libssl.so.47.0.5
			libssl.so.10 -> libssl.so.1.0.2k
			libssl3.so -> libssl3.so
		```

3.	설치

	파이썬 소스를 다운로드 받아 컴파일 설치하는 것은 비교적 쉽다. 설치 위치는 /usr/local/kickscar/python3.7.6 이고 라이브러는 공유 라이브러리로 설치하였기 때문에 앞의 libssl과 마찬가지로 공유 라이브러리 캐시 설정을 한다.

	-	소스 컴파일 및 설치
		
	```sh
	wget https://www.python.org/ftp/python/3.7.6/Python-3.7.6.tgz
	tar xvfz Python-3.7.6.tgz 
	cd Python-3.7.6

	./configure --prefix=/usr/local/douzone2023/python3.7.6 --with-openssl=/usr/local/ssl --enable-shared
	make
	make install
	```

	-	공유 라이브러리 캐시 설정(/etc/ld.so.conf.d/python.conf)

		```sh
		vi /etc/ld.so.conf.d/python.conf
		
		```

	-	python.conf 내용

		```sh
		/usr/local/dozuone2023/python3.7.6/lib
		```

	-	ldconfig 실행 및 확인

		```sh
		ldconfig -v | grep python
		
		/usr/local/kickscar/python3.7.6/lib:
			libpython3.so -> libpython3.so
			libpython3.7m.so.1.0 -> libpython3.7m.so.1.0
			libpython2.7.so.1.0 -> libpython2.7.so.1.0

		```

4.	설정

	-	설치 디렉토리 링크 및 PATH 설정

		```sh
		ln -s /usr/local/douzone2023/python3.7.6 /usr/local/douzone2023/python
		```

	-	/etc/profile 수정

		```sh
		# python
		export PATH=$PATH:/usr/local/douzone2023/python/bin
		
		```

	-	설정 적용 및 확인

		```bash
		source /etc/profile
		python3 --version
		
		Python 3.7.6
		```