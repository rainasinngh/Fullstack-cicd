pipeline {
    agent any  

    options {
        timestamps()           // 🕓 Adds timestamps to each log line
        ansiColor('xterm')     // 🎨 Enables colored output
    }

    environment {
        FRONTEND_IMAGE = 'rainaaaaa/raahat-frontend'  
        BACKEND_IMAGE  = 'rainaaaaa/raahat-backend'
        DOCKER_CREDENTIALS = 'DOCKER_CREDENTIALS'
        DOCKER_COMPOSE_FILE = 'docker-compose.yml'
    }

    stages {

        stage('🔧 Build Docker Images') {
            steps {
                script {
                    echo 'Building Docker images for frontend and backend...'
                
                    sh 'docker-compose up -d '
                }
            }
        }

        
       
        
        stage('Deploy Application') {
                    echo "\033[1;34m=== Building Docker images for frontend and backend... ===\033[0m"
                    sh '''
                        docker-compose -f ${DOCKER_COMPOSE_FILE} build > build.log 2>&1 || {
                            echo "\033[0;31m❌ Build failed. Last 30 lines of build.log:\033[0m"
                            tail -n 30 build.log
                            exit 1
                        }
                    '''
                }
            }
        }

        stage('📦 Push Docker Images') {
            steps {
                script {
                    echo "\033[1;34m=== Logging into DockerHub and pushing images... ===\033[0m"
                    
                    withCredentials([usernamePassword(credentialsId: DOCKER_CREDENTIALS, usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        sh "docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD"
                    }

                    sh '''
                        docker push ${FRONTEND_IMAGE} > push_frontend.log 2>&1
                        docker push ${BACKEND_IMAGE} > push_backend.log 2>&1
                    '''
                }
            }
        }

        stage('🚀 Deploy Application') {
            steps {
                script {
                    echo "\033[1;34m=== Deploying application using Docker Compose... ===\033[0m"
                    sh '''
                        docker-compose -f ${DOCKER_COMPOSE_FILE} up -d > deploy.log 2>&1 || {
                            echo "\033[0;31m❌ Deployment failed. Last 20 lines of deploy.log:\033[0m"
                            tail -n 20 deploy.log
                            exit 1
                        }
                    '''
                }
            }
        }
    }

    post {
        always {
            echo "\033[1;33mCleaning up unused Docker resources...\033[0m"
            sh 'docker system prune -f'
        }

        success {
            echo "\033[1;32m✅ Pipeline succeeded! Application deployed successfully.\033[0m"
        }

        failure {
            echo "\033[1;31m❌ Pipeline failed. Please check above logs or the log files.\033[0m"
            archiveArtifacts artifacts: '*.log', allowEmptyArchive: true
        }
    }
}
