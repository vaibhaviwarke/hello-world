pipeline {
    options {
        buildDiscarder(logRotator(numToKeepStr: '5', artifactNumToKeepStr: '5'))
    }
    agent any
    
    stages {
        stage('Code Compilation') {
            steps {
		    script{
		    	sh """
				 #mvn clean compile
				 #rm -rf package-lock.json
				 #rm -rf node_modules
				 #rm -rf dist
				 #npm cache clean --force
				 # n 8.0.0 
				 #npm update
				 #npm install 
				 #npm install --save-dev @angular-devkit/build-angular
				 npm link 
				 #npm install npm@latest -g
				 #yum install nodejs 
				 #n latest
				 #n 13.1.0 
				 #node -v 
				 #npm install @angular-devkit/build-angular
				 ng build
				 #ng serve --host 172.16.8.93 --port 4201
				 npm install forever -g
				 forever start ng serve --host 172.16.8.93 --port 4201
				 #cd dist
				 #jar cvf dist.war .
			   """
		    }
            }
        }
        stage('Build Docker Image') {
           steps {
                sh """
			docker build -t hello-world-${env.BUILD_NUMBER} .
           	   """
		}
         }
        stage('Stage') {
            steps {
			   script {
			       sh """
				 # docker tag hello-world-${env.BUILD_NUMBER}:latest 172.16.8.93:5000/hello-world-${env.BUILD_NUMBER}
				  #docker push 172.16.8.93:5000/hello-world-${env.BUILD_NUMBER}
				  #docker rmi hello-world-${env.BUILD_NUMBER}
				  """
				  }
                  }
	}
        stage('Deploy to Production') {
            steps {
                sh 'date'
            }
        }
    }
}
