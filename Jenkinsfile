pipeline {
    agent any  

    environment {
        
        FRONTEND_IMAGE = 'rainaaaaa/raahat-frontend'  
        BACKEND_IMAGE =  'rainaaaaa/raahat-backend'

        
        DOCKER_CREDENTIALS = 'DOCKER_CREDENTIALS' 

    
        DOCKER_COMPOSE_FILE = 'docker-compose.yml'
    }

    stages {
        
        stage('Build Docker Images') {
            steps {
                script {
                    echo 'Building Docker images for frontend and backend...'
                
                    sh 'docker-compose -f ${DOCKER_COMPOSE_FILE} build'
                }
            }
        }

        
        stage('Push Docker Images') {
            steps {
                script {
                    echo 'Logging in to DockerHub and pushing Docker images...'
                    
                    withCredentials([usernamePassword(credentialsId: DOCKER_CREDENTIALS, usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        sh "docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD"
                    }
                    
                    sh "docker push ${FRONTEND_IMAGE}"
                    sh "docker push ${BACKEND_IMAGE}"
                }
            }
        }

        
        stage('Deploy Application') {
            steps {
                script {
                    echo 'Deploying the application using Docker Compose...'
                    
                    sh 'docker-compose -f ${DOCKER_COMPOSE_FILE} up -d'
                }
            }
        }
    }

    post {
        
        always {
            echo 'Cleaning up Docker resources...'
            
            sh 'docker system prune -f' 
        }

        success {
            echo 'Pipeline succeeded! Application deployed successfully.'
        }

        failure {
            echo 'Pipeline failed. Check the logs for errors.'
        }
    }
}
