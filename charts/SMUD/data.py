import csv
'''
You will also find that a project may not show 'complete' in the application status (col B) but has a PV meter install date (col OF). If there is a date it is complete.  However if there is no date and status is complete, that is also complete. 
'''
with open("smud_solar_oct_2014.csv", 'rU') as f, open('/Volumes/Data/Courses/Coding for Journalists/mb10.github.io/charts/SMUD/SMUDclean.csv', 'wb') as new_csv:
	solardata = csv.DictReader(f)
	fields = list(solardata.fieldnames)
	writer = csv.DictWriter(new_csv, fields)
	writer.writeheader()
	count = 0
	for line in solardata:
		if line["PV Meter Installed Date"] or (line["Current Application Status"]).lower() == "completed":
			writer.writerow(line)
			count+=1
	print count

