import streamlit as st
import os

# Set the path to your HTML file
current_dir = os.path.dirname(os.path.abspath(__file__))
index_html_path = os.path.join(current_dir, "indexs.html")

# Function to load file content
def load_file_content(file_path):
    with open(file_path, "r", encoding="utf-8") as file:
        return file.read()

# Main Streamlit app
def main():
    st.title("Displaying Vinayak's Portfolio")

    # Load and render the indexs.html file
    index_html_content = load_file_content(index_html_path)
    st.components.v1.html(index_html_content, height=800, scrolling=True)

# Run the app
if __name__ == "__main__":
    main()
