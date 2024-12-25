# belly-button-challenge
## Files in this repository and their function
> - <ins>samples.json</ins> - this file is a local file equivalent to the static data link used as the dataset in this assignment https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json .  This is for reference only as the code uses D3 to pull from the URL
> - <ins>index.html</ins> - this sets up the custom HTML site in which the bar chart, bubble chart, and updating data is displayed in readable format from this dataset
> - <ins>/static/js/app.js</ins> - this is the main code file where the data operations take place. It completes the below:
> > - The D3 library is called to import data from the static JSON link https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json, saves the metadata field into a varaible
> > - A dynamic filter is created to search for the desired sample number when inputted into the function and it is added to the metaDataResultArray
> > - The program goes through a loop and appends new tags for each key value in the filtered metadata
> > - a query is created to return all the samples data from the JSON source
> > - A dynamic filter function is created to return only the samples for the desired object with the inputted sample number
> > - otu_ids, otu_labels, and sample_values from the JSON source are assigned to variables to be used to build the charts
> > - A Bubble Chart is created comparing OTU_IDs versus Sample Values
> > - The Bubble Chart Layout is created with titles, messages to display when the user hovers their mouse over a value
> > - The bar chart is rendered and displayed.  An example is displayed below: <br><br>
> > ![image](https://github.com/user-attachments/assets/2a787afc-fbf8-41ae-8230-a3490a91c695)<br><br>
> > - A horizontal bar chart is created with the sample values as they pertain to OTU_Labels
> > - The bar chart layout is set with a title a a "Number of Bacteria" title
> > - The bar chart is plotted and an example is displayed below:
> > ![image](https://github.com/user-attachments/assets/327b653a-785b-4a7d-9eb8-890823b634ab)

