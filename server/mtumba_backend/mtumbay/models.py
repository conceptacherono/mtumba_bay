from django.db import models

class FileModel(models.Model):
    file = models.FileField(upload_to='files/')

    def filename(self):
        return self.file.name.split('/')[-1]
