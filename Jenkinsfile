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
				 rm -rf package-lock.json
				 rm -rf node_modules
				 rm -rf dist
				 npm cache clean --force

				 #npm install
				 #npm install npm@latest -g
				yum install nodejs
				node -v 
				ng build
				 cd dist
				 jar cvf dist.war .
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
        stage('Upload Docker Image to AWS ECR') {
            steps {
			   script {
			       sh """
				  docker tag hello-world-${env.BUILD_NUMBER}:latest 172.16.8.93:5000/hello-world-${env.BUILD_NUMBER}
				  docker push 172.16.8.93:5000/hello-world-${env.BUILD_NUMBER}
				  docker rmi hello-world-${env.BUILD_NUMBER}
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
