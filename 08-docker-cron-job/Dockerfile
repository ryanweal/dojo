FROM ubuntu:latest

# adapted from: https://github.com/Ekito/docker-cron

# Add crontab file in the cron directory
ADD crontab /etc/cron.d/dcron
RUN chmod 0644 /etc/cron.d/dcron

# Create the log file (note: no log rotation)
RUN touch /var/log/cron.log

# Let's do this
RUN apt-get -y update && apt-get -y install cron curl wget

# Run the command on container startup
CMD cron && tail -f /var/log/cron.log