1. 개발(테스트)
	eclipse Ctrl+F11 (스프링부트 애플리케이션 실행)

2. 빌드 & 배포
	1) 빌드 메이븐 골 
		mvn -f kanbanboard/backend clean package
		
		
		
		
	2) 배포 후 실행
		-java -Dspring.profiles.active=production -jar kanbanboard/backend/target/kanbanboard.jar
		
	