FROM python:3.9-slim-buster

# Set the working directory
WORKDIR /app

# Copy the requirements file into the container and install the dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code into the container
COPY . .

# Expose the port on which the app will run
EXPOSE 4000

# Set the command to start the app
CMD ["python", "app.py"]