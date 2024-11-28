pipeline {
    agent any
    environment {
        DOCKER_IMAGE = 'edwinko/say_hello_ed:latest'
        APP_PORT = '3000'
    }
    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${DOCKER_IMAGE} ."
                }
            }
        }
        stage('Run Docker Container') {
            steps {
                script {
                    sh 'docker rm -f app-container || true' // supp l'ancien container
                    sh "docker run -d -p ${APP_PORT}:${APP_PORT} --name app-container ${DOCKER_IMAGE}"
                }
            }
        }
        stage('Test Application') {
            steps {
                script {
                    sh "sleep 5" // Attendre que l'application démarre
                    sh "curl -f http://localhost:${APP_PORT} || echo 'Application test failed'"
                }
            }
        }
    }
    post {
        always {
            sh 'docker rm -f app-container || true'
        }
    }
}
