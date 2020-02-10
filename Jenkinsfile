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
				 #npm cache clean --force
				 #npm update
				 npm install 
				 npm install --save-dev @angular-devkit/build-angular -g
				 npm install npm@stable -g
				 npm install @angular-devkit/build-angular -g
				 ng build --prod
				 mv /var/lib/jenkins/workspace/hello-world/dist/hello-world/* /var/www/html
		          """
		    }
            }
        }
        stage('Build Docker Image') {
           steps {
                sh """
			#docker build -t hello-world-${env.BUILD_NUMBER} .
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
